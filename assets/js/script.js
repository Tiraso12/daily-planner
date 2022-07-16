// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


//current day displayed
$("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

$(".container").append("<div id='hour' class= 'row time-block'>" );
$("#hour").append("<div class= 'hour col-md-1'>" );
$("#hour").append("<textarea class= 'col-md-10 description'>" );
$("#hour").append("<button class= 'btn saveBtn col-md-1'> <i class='fas fa-save'>");


var eventEl = [];

