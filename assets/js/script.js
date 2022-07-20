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
