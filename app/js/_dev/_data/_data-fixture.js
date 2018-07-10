
// Data - Fixture/Results

function dataFixture() {
    
    
    // Dummy Dev File
    $.getJSON('../data/data-fixture.json', function(json){

        // console.log(json);
        console.log('fixture loaded');
        
        var today = new Date;
        var testDate = new Date('2018-04-24');
        var currentRound = [];
        var currentRoundNo = roundCalc(today);
        // var currentRoundNo = 2;

        $('.js-fixture-round').text(currentRoundNo);

        for (i = 0; i < json.length; i++) {
            const element = json[i];
            
            if (element.round.number == currentRoundNo) {
                currentRound.push(element);
            }
        }

        // console.log(currentRound);

        var game1 = currentRound[8];

        for (i = 0; i < currentRound.length; i++) {
            const element = currentRound[i];

            fixtureItem(element);
        }
    });

}

