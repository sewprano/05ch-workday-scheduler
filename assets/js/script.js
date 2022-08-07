//put elements into variables
var timeBlockEl = $('#timeBlock');
var todayEl = $('#currentDay');

//get now
var now = moment();
//get current hour
var currentHour = parseInt(now.format("H"));

// display current day
todayEl.text(now.format("MMMM Do YYYY, h:mm:ss a"));
//error checking:
//console.log(now.format("MMMM Do YYYY, h:mm:ss a"));


//if current hour, style with .present
//if hour past, style with .past
//if hour future, style with .future
function relativeHour(hour) {

    if (hour < currentHour) {
        return "past";
    }
    if (hour > currentHour) {
        return "future"
    }
    if (hour === currentHour) {
        return "present";
    }
} 

// display time blocks
function createTimeBlocks() {
    for (i = 8; i <= 18; i++) {
        var rowEl = $( "<div>");
        var hourEl = $( "<div>");
        var eventEl = $( "<textarea>");
        var saveEl = $( "<button>");

        //use bootstrap for screen sizes
        rowEl.addClass( 'row mx-1 mx-sm-0' );
        hourEl.addClass( 'hour col-2 col-lg-1' );
        eventEl.addClass( 'col-8 col-lg-10' );
        saveEl.addClass( 'saveBtn col-2 col-lg-1 text-center border-0' );

        //add text to save button
        saveEl.text("Save");
        //add data to elements
        saveEl.data("hour", i);
        eventEl.data("hour", i);
        //get saved events
        eventEl.val(localStorage.getItem("hour-" + i));
        //format and display hour
        hourEl.text(moment().hour(i).format("ha"));
        
        //format blocks past/present/future
        eventEl.addClass(relativeHour(i));

        //append everything to row element
        rowEl.append(hourEl);
        rowEl.append(eventEl);
        rowEl.append(saveEl);

        //append rowEl to DOM
        timeBlockEl.append(rowEl);
    }
}

function saveEvent(event) {
    var target = $(event.target);
    var value = target.siblings("textarea").val();
    console.log(value);
    localStorage.setItem("hour-" + target.data("hour"), value);
}

createTimeBlocks();

//save events
timeBlockEl.on("click", "button", saveEvent);
