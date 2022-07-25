var titleTime = moment().format('dddd, MMMM Do');
var currentHour = moment().format("hA");
//current day displayed
$("#currentDay").html(titleTime);


console.log(currentHour);






















































































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






// var backgroundColor;

// var calendarRow = [
//     { time: 9, meridiam:"Am", work: "", },
//     { time: "10 AM", work: "", },
//     { time: "11 AM", work: "", },
//     { time: "12 PM", work: "", },
//     { time: "1 PM", work: "", },
//     { time: "2 PM", work: "", },
//     { time: "3 PM", work: "", },
//     { time: "4 PM", work: "", },
//     { time: "5 PM", work: "", }
// ];


// //create the time-block
// $(function () {
//     //loop through each time propertie, and index 
//     calendarRow.forEach(function (element,index) {

//         // var for each time propertie
//         var timeBlock = element.time;
//         if (timeBlock === timeTracker()) {
//             $('.container').append("<div class='time-block row'> <div class='hour col-1' id='"+index+"'>"+
//             timeBlock+"</div> <textarea class='present description col-10' ></textarea> <button class='saveBtn col-1'>"+
//             "<span><i class='fa fa-save''></span></button></div>");
//         }else if( timeBlock > timeTracker()){

//             $('.container').append("<div class='time-block row'> <div class='hour col-1' id='"+index+"'>"+
//             timeBlock+"</div> <textarea class='future description col-10' ></textarea> <button class='saveBtn col-1'>"+
//             "<span><i class='fa fa-save''></span></button></div>"); 
//         }else if(timeBlock < timeTracker()){
//             $('.container').append("<div class='time -block row'> <div class='hour col-1' id='"+index+"'>"+
//             timeBlock+"</div> <textarea class='past description col-10' ></textarea> <button class='saveBtn col-1'>"+
//             "<span><i class='fa fa-save''></span></button></div>");
//         }                 
//     });
// });

// var timeTracker = function () {
//     var timeNow = hourJs;
//     return timeNow;
// };

// timeTracker();