
var wfx = wfx || {};

wfx.wfnotesmd = (function(){


    var noteSelector = 'div.project.noted div.notes div.content';

    // need to change this url
    $.getScript("https://jonschlinkert.github.io/remarkable/dist/remarkable.js")
    	.done(function() {
            runMarkdown();
    	})
    	.fail(function() {
            console.log('failed!');
        });

    var warned = localStorage['wfx_md_been_warned'];
    if (typeof warned === 'undefined' || warned === null) {
        alert('Warning: Running this will strip the MD formatting if the node\'s note is saved on the server.')
        warned = confirm('Please note this markdown converter is an experiment and you may even lose content. Do not edit the page after converting. Are you sure you want to try it?');
        localStorage['wfx_md_been_warned'] = warned;
    }

    var runMarkdown = function(){};

    if (warned === 'false') {
        console.warn('localStorage value for wfx_md_been_warned is false. Aborting markdown.');
        runMarkdown = function(){return false}
    } else if (localStorage['wfx_md_been_warned'] === 'true') {
        runMarkdown = function(){
            var rm = new Remarkable('full');

            var imgNode = $(noteSelector, '#pageContainer');
            var imgNote = $(imgNode);

            var $imgLink;
            var $imgUrl;

        	console.log('huh?', imgNode);

            $.each(imgNote, function(e, i){

                var out = rm.render($(i).text())

                $(i).removeAttr('contenteditable');
                $(i).html(out);

            })

            $('.noted>.notes>.content').css({
                height: 'auto',
                overflow: 'visible',
                display: 'block'
            })
        }
    }
    return runMarkdown;
}());
