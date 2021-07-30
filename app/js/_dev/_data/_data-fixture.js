

// Data - Fixture/Results

function dataFixture(data_teams) {

    // Variables
    var self = this;
    var matchday = [];
    self.matchdayURI = "https://api.football-data.org/v2/competitions";
    self.matchesURI = "https://api.football-data.org/v2/competitions/2002/matches";

    self.ajax = function(uri, method, data) {
       var request = {
          url: uri,
          type: method,
          accepts: "application/json",
          cache: false,
          dataType: "json",
          data: JSON.stringify(data),
          headers: {"X-Auth-Token": "5c8b70988e784fca8186b93d38b1bae7"},
          error: function (jqXHR) {
                console.log("ajax error " + jqXHR.status);
          }
 
       };
 
       return $.ajax(request);
    }

    function match_day(fixture){
        // Matchday
        self.ajax(self.matchdayURI, 'GET').done(function(data){
            var competitions = data.competitions;
            console.log(competitions);

            for (i = 0; i < competitions.length; i++) {
                const comp = competitions[i];
                
                if (comp.id == 2002) {
                    matchday.push(comp.currentSeason.currentMatchday);
                }
            }
        });
        fixture;
    }

    function fixture(){

        self.ajax(self.matchesURI, 'GET').done(function(data) {
    
            var matches = data.matches;
            var today = new Date;
            var testDate = new Date('2018-04-24');
            var currentRound = [];
            var currentRoundNo = matchday[0];
    
            $('.js-fixture-round').text(currentRoundNo + ". Spieltag");
    
            for (i = 0; i < matches.length; i++) {
                const element = matches[i];
                
                if (element.matchday == currentRoundNo) {
                    currentRound.push(element);
                }
            }
    
            console.log(data);
    
            for (i = 0; i < currentRound.length; i++) {
                const match = currentRound[i];
    
                fixtureItem(match, data_teams);
            }
        })

    }

    match_day(fixture());
}
