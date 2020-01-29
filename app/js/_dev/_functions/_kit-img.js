function kitImg(homename,awayname,location){
    
    if (location == "Home") {
        if (homename == '1. FC Nürnberg') {
            return 'img/teams/Nuernberg/Home.png';

        } else if (homename == '1. FSV Mainz 05') {
            return 'img/teams/Mainz/Home.png';

        } else if (homename == 'Bayer 04 Leverkusen') {
            return 'img/teams/Leverkusen/Home.png';

        } else if (homename == 'BV Borussia 09 Dortmund') {
            return 'img/teams/Dortmund/Home.png';

        } else if (homename == 'Borussia Mönchengladbach') {
            return 'img/teams/Gladbach/Home.png';

        } else if (homename == 'Eintracht Frankfurt') {
            return 'img/teams/Frankfurt/Home.png';

        } else if (homename == 'FC Augsburg') {
            return 'img/teams/Augsburg/Home.png';

        } else if (homename == 'FC Bayern München') {
            return 'img/teams/Bayern/Home.png';

        } else if (homename == 'FC Schalke 04') {
            return 'img/teams/Schalke/Home.png';

        } else if (homename == 'TSV Fortuna 95 Düsseldorf') {
            return 'img/teams/Duesseldorf/Home.png';

        } else if (homename == 'Hannover 96') {
            return 'img/teams/Hannover/Home.png';

        } else if (homename == 'Hertha BSC') {
            return 'img/teams/Hertha/Home.png';

        } else if (homename == 'RB Leipzig') {
            return 'img/teams/Leipzig/Home.png';

        } else if (homename == 'SC Freiburg') {
            return 'img/teams/Freiburg/Home.png';

        } else if (homename == 'TSG 1899 Hoffenheim') {
            return 'img/teams/Hoffenheim/Home.png';

        } else if (homename == 'VfB Stuttgart') {
            return 'img/teams/Stuttgart/Home.png';

        } else if (homename == 'VfL Wolfsburg') {
            return 'img/teams/Wolfsburg/Home.png';

        } else if (homename == 'SV Werder Bremen') {
            return 'img/teams/Bremen/Home.png';
        
        } else if (homename == 'SC Paderborn 07') {
            return 'img/teams/Paderborn/Home.png';
        
        } else if (homename == '1. FC Köln') {
            return 'img/teams/Koeln/Home.png';
        
        } else if (homename == '1. FC Union Berlin') {
            return 'img/teams/Union/Home.png';
        }

    // Away Team Kit Switching

    } else if (location == "Away") {

        // 1. FC Nürnberg - White
        if (awayname == "1. FC Nürnberg") {
            if (homename== "1. FC Köln" || homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig" || homename == "TSV Fortuna 95 Düsseldorf") {
                return 'img/teams/Nuernberg/Home.png';
            } else {
                return 'img/teams/Nuernberg/Away.png';
            }

        // 1. FSV Mainz 05 - White
        } else if (awayname == "1. FSV Mainz 05") {
            if (homename== "1. FC Köln" || homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig" || homename == "TSV Fortuna 95 Düsseldorf") {
                return 'img/teams/Mainz/Third.png';
            } else {
                return 'img/teams/Mainz/Away.png';
            }

        // Bayer Leverkusen - Black
        } else if (awayname == "Bayer 04 Leverkusen") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig" || homename == "TSV Fortuna 95 Düsseldorf") {
                return 'img/teams/Leverkusen/Third.png';
            } else {
                return 'img/teams/Leverkusen/Away.png';
            }

        // Borussia Dortmund - Black
        } else if (awayname == "BV Borussia 09 Dortmund") {
            if (homename == "Eintracht Frankfurt" || homename == "VfL Wolfsburg" || homename == "SC Paderborn 07"){
                return 'img/teams/Dortmund/Home.png';
            } else {
                return 'img/teams/Dortmund/Away.png';
            }

        // Borussia Mönchengladbach - Blue
        } else if (awayname == 'Borussia Mönchengladbach') {
            if (homename == "FC Schalke 04" || homename == "Hertha BSC" || homename == "TSG 1899 Hoffenheim") {
                return 'img/teams/Gladbach/Home.png';
            } else {
                return 'img/teams/Gladbach/Away.png';
            }

        // Eintracht Frankfurt - White
        } else if (awayname == "Eintracht Frankfurt") {
            if (homename== "1. FC Köln" || homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig" || homename == "TSV Fortuna 95 Düsseldorf") {
                return 'img/teams/Frankfurt/Third.png';
            } else {
                return 'img/teams/Frankfurt/Away.png';
            }

        // FC Augsburg - Black
        } else if (awayname == "FC Augsburg") {
            if (homename == "Eintracht Frankfurt" || homename == "VfL Wolfsburg" || homename == "SC Paderborn 07") {
                return 'img/teams/Augsburg/Third.png';
            } else {
                return 'img/teams/Augsburg/Away.png';
            }

        // FC Bayern - White
        } else if (awayname == "FC Bayern München") {
            if (homename== "1. FC Köln" || homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig" || homename == "TSV Fortuna 95 Düsseldorf") {
                return 'img/teams/Bayern/Home.png';
            } else {
                return 'img/teams/Bayern/Away.png';
            }

        // FC Schalke 04 - White
        } else if (awayname == "FC Schalke 04") {
            if (homename== "1. FC Köln" || homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig" || homename == "TSV Fortuna 95 Düsseldorf") {
                return 'img/teams/Schalke/Home.png';
            } else {
                return 'img/teams/Schalke/Away.png';
            }

        // Fortuna Düsseldorf - Red
        } else if (awayname == "TSV Fortuna 95 Düsseldorf") {
            if (homename == "Bayer 04 Leverkusen" || homename == "SC Freiburg" || homename == "FC Bayern München" || homename == "1. FC Nürnberg" || homename == "1. FSV Mainz 05" || homename == "Hannover 96" || homename == "TSV Fortuna 95 Düsseldorf" || homename == "1. FC Union Berlin") {
                return 'img/teams/Duesseldorf/Third.png';
            } else {
                return 'img/teams/Duesseldorf/Away.png';
            }

        // Hannover 96 - Black
        } else if (awayname == "Hannover 96") {
            if (homename == "Eintracht Frankfurt" || homename == "VfL Wolfsburg" || homename == "SC Paderborn 07") {
                return 'img/teams/Hannover/Third.png';
            } else {
                return 'img/teams/Hannover/Away.png';
            }

        // Hertha BSC - Red & Black
        } else if (awayname == "Hertha BSC") {
            if (homename == "Bayer 04 Leverkusen" || homename == "Eintracht Frankfurt" || homename == "Bayer 04 Leverkusen" || homename == "SC Freiburg" || homename == "FC Bayern München" || homename == "1. FC Nürnberg" || homename == "1. FSV Mainz 05" || homename == "Hannover 96" || homename == "TSV Fortuna 95 Düsseldorf" || homename == "1. FC Union Berlin") {
                return 'img/teams/Hertha/Home.png';
            } else {
                return 'img/teams/Hertha/Away.png';
            }

        // RB Leipzig - Dark Blue (Black and Blue)
        } else if (awayname == "RB Leipzig") {
            if (homename == "Eintracht Frankfurt" || homename == "VfL Wolfsburg" || homename == "SC Paderborn 07" || homename == "Bayer 04 Leverkusen" || homename == "FC Schalke 04" || homename == "Hertha BSC" || homename == "TSG 1899 Hoffenheim") {
                return 'img/teams/Leipzig/Home.png';
            } else {
                return 'img/teams/Leipzig/Away.png';
            }

        // SC Freiburg - White
        } else if (awayname == "SC Freiburg") {
            if (homename== "1. FC Köln" || homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig" || homename == "TSV Fortuna 95 Düsseldorf") {
                return 'img/teams/Freiburg/HomeAlt.png';
            } else {
                return 'img/teams/Freiburg/Away.png';
            }

        // TSG 1899 Hoffenheim - Light Green
        } else if (awayname == "TSG 1899 Hoffenheim") {
            if (homename == "VfL Wolfsburg" || homename == "SV Werder Bremen" || homename == "FC Augsburg" || homename == "Borussia Mönchengladbach") {
                return 'img/teams/Hoffenheim/Third.png';
            } else {
                return 'img/teams/Hoffenheim/Away.png';
            }

        // VfB Stuttgart - Red
        } else if (awayname == "VfB Stuttgart") {
            if (homename == "Bayer 04 Leverkusen" || homename == "SC Freiburg" || homename == "FC Bayern München" || homename == "1. FC Nürnberg" || homename == "1. FSV Mainz 05" || homename == "Hannover 96" || homename == "TSV Fortuna 95 Düsseldorf"){
                return 'img/teams/Stuttgart/Third.png';
            } else {
                return 'img/teams/Stuttgart/Away.png';
            }

        // VfL Wolfsburg - Light Blue
        } else if (awayname == "VfL Wolfsburg") {
            if (homename == "FC Schalke 04" || homename == "Hertha BSC" || homename == "TSG 1899 Hoffenheim") {
                return 'img/teams/Wolfsburg/Third.png';
            } else {
                return 'img/teams/Wolfsburg/Away.png';
            }

        // Werder Bremen - White
        } else if (awayname == "SV Werder Bremen") {
            if (homename== "1. FC Köln" || homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig" || homename == "TSV Fortuna 95 Düsseldorf") {
                return 'img/teams/Bremen/Home.png';
            } else {
                return 'img/teams/Bremen/Away.png';
            }
        
        // SC Paderborn - White
        } else if (awayname == 'SC Paderborn 07') {
            if (homename== "1. FC Köln" || homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig" || homename == "TSV Fortuna 95 Düsseldorf") {
                return 'img/teams/Paderborn/Third.png';
            } else {
                return 'img/teams/Paderborn/Away.png';
            }
        
        // FC Köln - Red
        } else if (awayname == '1. FC Köln') {
            if (homename == "Bayer 04 Leverkusen" || homename == "SC Freiburg" || homename == "FC Bayern München" || homename == "1. FC Nürnberg" || homename == "1. FSV Mainz 05" || homename == "Hannover 96" || homename == "TSV Fortuna 95 Düsseldorf" || homename == "1. FC Union Berlin"){
                return 'img/teams/Koeln/Third.png';
            } else {
                return 'img/teams/Koeln/Away.png';
            }
        
        // FC Union Berlin - White
        } else if (awayname == '1. FC Union Berlin') {
            if (homename== "1. FC Köln" || homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Union/Third.png';
            } else {
                return 'img/teams/Union/Away.png';
            }
        }
    }
}