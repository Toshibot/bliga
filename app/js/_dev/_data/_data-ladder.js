
//
// Data
// ====
function dataLadder() { 
    
    $.getJSON('https://www.openligadb.de/api/getbltable/bl1/2018', function (json) {
        var round = $('.c-ladder__round');

        // Construct the Ladder
        for (i = 0; i < json.length; i++) {
            const element = json[i];
            ladderItem(element, i+1);
        }

    });

}