var titleTime = moment().format('dddd, MMMM Do');
var hour = moment().format("h A")
//current day displayed
$("#currentDay").html(titleTime);

var calendarList= [
    {
        time: "9 AM",
        work:"",
    },
    {
        time: "10 AM",
        work:"",
    },
    {
        time: "11 AM",
        work:"",
    },
    {
        time: "12 PM",
        work:"",
    },
    {
        time: "1 PM",
        work:"",
    },
    {
        time: "2 PM",
        work:"",
    },
    {
        time: "3 PM",
        work:"",
    },
    {
        time: "4 PM",
        work:"",
    },
    {
        time: "5 PM",
        work:"",
    },
];

$('#9').text(calendarList[0].time);
$('#10').text(calendarList[1].time);
$('#11').text(calendarList[2].time);
$('#12').text(calendarList[3].time);
$('#1').text(calendarList[4].time);
$('#2').text(calendarList[5].time);
$('#3').text(calendarList[6].time);


$(function color() {
    var calendarT = $('#9').html();
    
    if (calendarT > hour) { 
        $('#area9').removeClass('past');
        $('#area9').removeClass('present');
        $('#area9').addClass('future');
        console.log(calendarT);
    }
    else if (calendarT = hour) {
        $('#area9').removeClass('past');
        $('#area9').removeClass('future');
        $('#area9').addClass('present');
    }
    else if (calendarT < hour) {
        $('#area9').removeClass('present');
        $('#area9').removeClass('future');
        $('#area9').addClass('past');
        
    }   
})
$(function color() {
    var calendarT = $('#10').html();
    
    if (calendarT > hour) { 
        $('#area10').removeClass('past');
        $('#area10').removeClass('present');
        $('#area10').addClass('future');
        console.log(calendarT);
    }
    else if (calendarT = hour) {
        $('#area10').removeClass('past');
        $('#area10').removeClass('future');
        $('#area10').addClass('present');
    }
    else if (calendarT < hour) {
        $('#area10').removeClass('present');
        $('#area10').removeClass('future');
        $('#area10').addClass('past');
        
    }   
})


$( "button" ).click(function() {
    var text = $( this ).text();
    $( "input" ).val( text );
    console.log(text);
  });
console.log(hour);
// $('.hour').text(calendarList[0].time);
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