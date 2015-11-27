
// v 0.0.1

var wfx = wfx || {};

wfx.runSearch = (function(){
    var searchFor = '';
    if (typeof arguments[0] !== 'undefined') {
        // console.log(1);
        return runSearch(arguments[0])
    } else {
        // console.log(2);
        return runSearch();
    }

    function runSearch(str){
        var x = (typeof str === 'undefined') ? window.prompt('Enter search term:') : str;

        try {
            window.search.setSearchBoxAndSearch(x)
        } catch(e) {
            console.warn('workflowy search failed!');
        }
        return true;
    }

}());
