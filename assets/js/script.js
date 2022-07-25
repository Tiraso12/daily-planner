var titleTime = moment().format('dddd, MMMM Do');
var currentHour = moment().hours();
//current day displayed
$("#currentDay").html(titleTime);


$('.saveBtn').on('click', function () {
    var textBlock = $(this).siblings(".description").val();
    var hourBlock = $(this).parent().attr('id');
    localStorage.setItem(hourBlock, textBlock);
});

function timeCheck() {
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

localStorage.getItem()
localStorage.getItem()
localStorage.getItem()
localStorage.getItem()
localStorage.getItem()
localStorage.getItem()
localStorage.getItem()
localStorage.getItem()
localStorage.getItem()

//localstorage that get item jquery



































































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






