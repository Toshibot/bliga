
// Constructs the ladder Items
function ladderItem(ladder_item, number, data_teams) {
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('span').text(data_teams[ladder_item.team.id].name);  
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('img').attr('src', data_teams[ladder_item.team.id].logo);  
    $('.c-ladder__item-' + number + ' div.c-ladder__played').text(ladder_item.playedGames);
    $('.c-ladder__item-' + number + ' div.c-ladder__wins').text(ladder_item.won);
    $('.c-ladder__item-' + number + ' div.c-ladder__losses').text(ladder_item.lost);
    $('.c-ladder__item-' + number + ' div.c-ladder__draws').text(ladder_item.draw);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-for').text(ladder_item.goalsFor);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-against').text(ladder_item.goalsAgainst);
    $('.c-ladder__item-' + number + ' div.c-ladder__percentage').text(ladder_item.goalDifference);
    $('.c-ladder__item-' + number + ' div.c-ladder__points').text(ladder_item.points);
}