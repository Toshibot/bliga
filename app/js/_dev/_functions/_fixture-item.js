
function fixtureItem(array) {

    var date = dateTime(array.MatchDateTimeUTC);
    var match_status = array.MatchIsFinished;

    if (match_status == true) {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--completed">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">' + date.time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + homeKit(array.Team1.TeamName) + '" />' +
                    '<span class="js-team-text">' + array.team_A.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + awayKit(array.Team2.TeamName) + '" />' +
                    '<span class="js-team-text">' + array.team_B.score + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + array.Location.LocationStadium + '</div>' +
            '</div>'
        );

    } else {

        $('.js-fixture').before(
            '<div class="c-fixture__game">' +
                '<div class= "c-fixture__date c-date" >' + 
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">' + date.time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + homeKit(array.Team1.TeamName) + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.Team1.TeamName) + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                '<img class="js-team-img" src="' + awayKit(array.Team2.TeamName) + '" />' +
                '<span class="js-team-text">' + teamAbrev(array.Team2.TeamName) + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + array.Location.LocationStadium + '</div>' +
            '</div>'
        );
    }
}