//put elements into variables
var timeBlockContainterEl = $('.container');
var todayEl = $('#currentDay');

//get now
var now = moment();
//get current hour
var currentHour = now.format("H");

// display current day
todayEl.text(now.format("MMMM Do YYYY, h:mm:ss a"));
//error checking:
//console.log(now.format("MMMM Do YYYY, h:mm:ss a"));

console.log(currentHour);

//if currnet hour, style with .present
//if hour past, style with .past
//if hour future, style with .future
function relativeHour() {
    if (hour === currentHour) {

    }
    else if (hour < currentHour) {

    }
    else if (hour > currentHour) {

    }
} 
//enter event

//save event
