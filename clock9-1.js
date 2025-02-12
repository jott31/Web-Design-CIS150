"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 1

   Clock
   Author: Joseph Ott
   Date:   4/10/2023

   function getWeekday(dayNum)
      Returns the text of the day of the week where dayNum
      is the number of the week from 0 (Sunday) to 6 (Saturday)
*/
runClock();
runClock.setInterval(1000);

function runClock(){
  var thisDay = newDate();
  var thisDate = thisDay.toLocaleDateString();
  var thisDayNum = thisDay.getDay();
  var thisWeekday = thisDayNum.getWeekday();
  var thisTime = thisDay.toLocaleTimeString();
  textContent = thisDate;
  textContent = thisWeekday;
  textContent = thisTime;
}

function getWeekday(dayNum) {
   var wDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return wDays[dayNum];
}
