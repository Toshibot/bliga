
// Data - Fixture/Results

function dataFixture() {
    $.getJSON('https://www.openligadb.de/api/getcurrentgroup/bl1', function(json){
        $('.js-fixture-round').text(json.GroupName);
    })
    
    // Dummy Dev File
    $.getJSON('https://www.openligadb.de/api/getmatchdata/bl1', function(json){

        console.log('fixture loaded');


        for (i = 0; i < json.length; i++) {
            const element = json[i];
            fixtureItem(element);
        }

    });

}

