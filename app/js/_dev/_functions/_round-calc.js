function roundCalc(d) {
   var currentDate = new Date(d);
   var month = currentDate.getMonth();
   var date = currentDate.getDate();
   var year = currentDate.getFullYear();

   // Gameday 1
   if (year == "2018" && month <= 7 && date <= 27) {
       return 1;

   // Gameday 2    
   } else if (year == "2018" && month == 7 && date <= 31 || year == "2018" && month == 8 && date == 3){
       return 2;

   // Gameday 3    
   } else if (year == "2018" && month == 8 && date <= 17){
      return 3;

   // Gameday 4    
   } else if (year == "2018" && month == 8 && date <= 24){
      return 4;

   // Gameday 5    
   } else if (year == "2018" && month == 8 && date <= 27){
      return 5;

   // Gameday 6    
   } else if (year == "2018" && month == 8 && date <= 31){
      return 6;

   }
}