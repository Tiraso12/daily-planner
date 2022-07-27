var titleTime = moment().format('dddd, MMMM Do');
var currentHour = moment().hours();
//current day displayed
$("#currentDay").html(titleTime);

 // function to save in local storage
$('.saveBtn').on('click', function () {
    //var to target the text area and grab input 
    var textBlock = $(this).siblings(".description").val();
    //var to grab the id and use it as the key 
    var hourBlock = $(this).parent().attr('id');

    //saving in local storage
    localStorage.setItem(hourBlock, textBlock);
    
});

//function to compare actual time with the times in the schedule
function timeCheck() {
    //loop through each time block
    $('.time-block').each(function () {
        
        var timeEvent = parseInt($(this).attr('id').split('-')[1]);

        if (timeEvent < currentHour) {
            $(this).addClass('past');
        } else if(timeEvent === currentHour){
            $(this).removeClass('past');
            $(this).addClass('present');
        }else{
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

timeCheck();

var interval = setInterval(timeCheck, 15000);

$("#block-9 .description").val(localStorage.getItem("block-9"));
$("#block-10 .description").val(localStorage.getItem("block-10"));
$("#block-11 .description").val(localStorage.getItem("block-11"));
$("#block-12 .description").val(localStorage.getItem("block-12"));
$("#block-1 .description").val(localStorage.getItem("block-1"));
$("#block-2 .description").val(localStorage.getItem("block-2"));
$("#block-3 .description").val(localStorage.getItem("block-3"));
$("#block-4 .description").val(localStorage.getItem("block-4"));
$("#block-5 .description").val(localStorage.getItem("block-5"));




































































// 1. create function for timeTracker
// 2. Add variable for moment.js
// 3. .each to loop over time blocks
// 4. variable for blockTime
// 5. Conditional statments comparing block time to time now
// --> .removeClass or .addClass 
// i.e $(this).removeClass("future"); 

//create a function time now
//.each for loop
//block time var  var blockTime = parseInt($(this).attr("id").split("hour")[1]);
//

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






