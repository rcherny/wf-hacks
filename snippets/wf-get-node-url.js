
// v 0.0.1

var wfx = wfx || {};

wfx.wrapper = function(txt, lnk){

    var open = '<opml><body><outline text="';
    var text = escapeOPML(txt);
    var splitter = '" _note="';
    var note = lnk;
    var end = '" /></body></opml>';

	// Escape special characters for OPML
	// thanks go to rawbytes -- more credit to come don't worry
	function escapeOPML(i){
		var o=i
			.replace(/&/g,'&amp;amp;')
			.replace(/</g,'&amp;lt;')
			.replace(/>/g,'&amp;gt;')
			.replace(/"/g,'&quot;');
	//		.replace(/(\n)/g,'&#10;');  for future selected text
	return (o);	}

    return open + text + splitter + note + end;
}

wfx.nodeUrl = (function(){

    var wrapOPML = wfx.wrapper;

    var get = function(){

        var $thisNode = {};

        // native backdoor api
        if (typeof window.getCurrentlyFocusedContent !== 'undefined') {
            $thisNode = window.getCurrentlyFocusedContent();
        } else {
            $thisNode = $('[contenteditable]:focus');
        }

        var text = $thisNode.text();
        var $thisAnchor = $thisNode.prev('a.bullet');

        // console.log(typeof $thisAnchor, $thisAnchor);

        if ($thisAnchor === undefined || $thisAnchor.length === 0) {
            console.warn('No selected anchor link.');
        } else {
//            window.prompt("Focused item url: ", "https://workflowy.com" + $thisAnchor.attr('href')); // + ' ' + textnode);
              window.prompt("Focused item url: ", wrapOPML(text, "https://workflowy.com" + $thisAnchor.attr('href')));
        }
    }

    return get();
}())
