
//
// Data
// ====
function dataLadder() { 

    
    $.getJSON('../data/dummy_data.json', function (json) {
        var round = $('.c-ladder__round');

        // console.log(json);
        // Round Number
        // round.text('AFL Ladder ' + json.round.name);

        // Construct the Ladder
        for (i = 0; i < json.teams.length; i++) {
            const element = json.teams[i];
            ladderItem(element, i+1);
        }
    });

}