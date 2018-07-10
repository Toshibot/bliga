
// Data - Fixture/Results

function dataFixture() {
    $.getJSON('https://www.openligadb.de/api/getcurrentgroup/bl1', function(json){
        $('.js-fixture-round').text(json.GroupName);
    })
    
    // Dummy Dev File
    $.getJSON('https://www.openligadb.de/api/getmatchdata/bl1', function(json){

        console.log(json);
        console.log('fixture loaded');
        
        // var today = new Date;
        // var testDate = new Date('2018-04-24');
        // var currentRound = [];
        // var currentRoundNo = roundCalc(today);
        // // var currentRoundNo = 2;


        for (i = 0; i < json.length; i++) {
            const element = json[i];
            fixtureItem(element);
        }

        // // console.log(currentRound);

        // var game1 = currentRound[8];

    });

}

