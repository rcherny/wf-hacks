
var wfx = wfx || {};

wfx.noteImg = (function(){

    var noteSelector = 'div.project.noted div.notes div.content';

    function noteImg(){
        var $imgNote = $(noteSelector, '#pageContainer');
        var $imgLink;
        var $imgUrl;

        $.each($imgNote, function(e, i){
            $imgLink = $(i).find('a');
            $imgUrl = $($imgLink).text();
            $imgLink.attr('data-img', $imgUrl);
            $imgLink.after('<img src="' + $imgUrl + '">');
        })
    }
    noteImg();

    // the CSS necessary for the notes to be expanded
    $('.noted>.notes>.content').css({
        height: 'auto',
        overflow: 'visible',
        display: 'block'
    });

    return noteImg;
}());
