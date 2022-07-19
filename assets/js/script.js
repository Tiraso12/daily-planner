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

var titleTime = moment().format('llll');

//current day displayed
$("#currentDay").html(titleTime);

var calendarList= [
    {
        time: "9AM",
        work:"",
    },
    {
        time: "10AM",
        work:"",
    },
    {
        time: "11AM",
        work:"",
    },
    {
        time: "12AM",
        work:"",
    },
    {
        time: "1PM",
        work:"",
    },
    {
        time: "2PM",
        work:"",
    },
    {
        time: "3PM",
        work:"",
    },
    {
        time: "4PM",
        work:"",
    },
    {
        time: "5PM",
        work:"",
    },
];

$(function(){

    calendarList.forEach(function(element, index){

        // this var takes each time of the timelist obj and create a divs.
        var hours = element.time;

        $(".container").append("<div class = 'row time-block'> <div class='hour col-1'> "+ hours +
        " </div> <textarea id='data-"+index+"' class='col-10 description '>"+element.work+"</textarea> <button class='btn saveBtn col-1' id='btn'> <span><i class= 'fa fa-save'></i></span></button>");
    });
});




