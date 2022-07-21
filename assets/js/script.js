var titleTime = moment().format('dddd, MMMM Do');
var hourJs = moment().format("h A")
//current day displayed
$("#currentDay").html(titleTime);

var calendarRow = [
    { time: "9 AM", work: "", },
    { time: "10 AM", work: "", },
    { time: "11 AM", work: "", },
    { time: "12 PM", work: "", },
    { time: "1 PM", work: "", },
    { time: "2 PM", work: "", },
    { time: "3 PM", work: "", },
    { time: "4 PM", work: "", },
    { time: "5 PM", work: "", }
];


//create the time-block
$(function () {
    //loop through each time propertie, and index 
    calendarRow.forEach(function (element,index) {
        // var for each time propertie
        var timeBlock = element.time;

        $('.container').append("<div class='time-block row'> <div class='hour col-1 | " 
        +index+ "'>"+timeBlock+"</div> <textarea class='description col-10' ></textarea> <button class='saveBtn col-1'>"+
        "<span><i class='fa fa-save''></span></button></div>");  
    });
});



// GIVEN I am using a daily planner to create a schedule
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

