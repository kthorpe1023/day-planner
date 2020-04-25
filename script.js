$(document).ready(function(){

    var currentDay = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDay);
    var currentHour = moment().format('HH')
    // console.log(currentHour)

    // function to create text blocks for schedule
    var times = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"]
    var milTimes = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
    // console.log(typeof times);
    for(var i=0; i<times.length; i++){
        // juse jQuery to create elements
        var newDiv = $("<div>");
        var newp = $("<p>")
        var newInput = $("<textarea>");
        var newBtn = $("<button>");

        // add class names to elements
        newDiv.addClass("row");
        newp.addClass("col-sm-1 time-block hour");
        newBtn.attr("id", milTimes[i]);
        newInput.attr("data-attribute", milTimes[i]);
        newp.text(times[i]);
        if (currentHour === milTimes[i]) {
            newInput.addClass("col-sm-10 description present");
        } else if (milTimes[i] > currentHour){
            newInput.addClass("col-sm-10 description future");
        } else if (milTimes[i] < currentHour){
            newInput.addClass("col-sm-10 description past")
        }
        newBtn.addClass("col-sm-1 saveBtn");
        newBtn.text("Save");

        // appending elements to the dom
        newDiv.append(newp, newInput, newBtn);
        $(".container").append(newDiv);
    }
    


    $(".saveBtn").on("click", function(){
        // var classeType = $(".description");
        var input = $(this).attr();
        
        // console.log(input);
        // var value = input.val()
    //    localStorage.setItem("input", value);
    //    console.log(typeof input);
    
    });

    // console.log($(".hour").name.val());

    

    













})