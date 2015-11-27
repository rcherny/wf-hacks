
// v 0.0.1

var wfx = wfx || {};

wfx.nodeUrl = (function(){

    var get = function(){

        var $thisNode = {};

        // native backdoor api / make sure it still exists before using it
        if (typeof window.getCurrentlyFocusedContent !== 'undefined') {
            $thisNode = window.getCurrentlyFocusedContent();
        } else {
            $thisNode = $('[contenteditable]:focus');
        }

        var $thisAnchor = $thisNode.prev('a.bullet');

        // console.log(typeof $thisAnchor, $thisAnchor);

        if ($thisAnchor === undefined || $thisAnchor.length === 0) {
            console.warn('No selected anchor link.');
        } else {
            window.prompt("Focused item url: ", "https://workflowy.com" + $thisAnchor.attr('href')); // + ' ' + textnode);
        }
    }

    return get();
}())
