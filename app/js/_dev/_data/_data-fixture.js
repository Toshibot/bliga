

// Data - Fixture/Results

function dataFixture(self) {

    // Variables
    var matchday = '';
    self.matchesURI = "https://api.football-data.org/v2/competitions/2002/matches";
    self.matchdayURI = "https://api.football-data.org/v2/competitions";

    // // Matchday
    // self.ajax(self.matchdayURI, 'GET').done(function(data){
    //     var competition = data.competitions[63];

    //     matchday = competition.currentSeason.currentMatchday;
    // });

    self.ajax(self.matchesURI, 'GET').done(function(data) {

        var matches = data.matches;
        var today = new Date;
        var testDate = new Date('2018-04-24');
        var currentRound = [];
        var currentRoundNo = roundCalc(today);

        $('.js-fixture-round').text(currentRoundNo + ". Spieltag");

        for (i = 0; i < matches.length; i++) {
            const element = matches[i];
            
            if (element.matchday == currentRoundNo) {
                currentRound.push(element);
            }
        }

        console.log(data);

        for (i = 0; i < currentRound.length; i++) {
            const element = currentRound[i];

            fixtureItem(element);
        }
    })
}
