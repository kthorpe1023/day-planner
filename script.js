$(document).ready(function(){

    // declare global variables
    var currentDay = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDay);
    var currentHour = moment().format('HH');
    var times = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"]
    var milTimes = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
    // array todos storing user input from textarea
    var todos = ["", "", "", "","","","","","",""];
    // get items from local storage on page load
    var getList = localStorage.getItem("To-do-list");
    // change variable todos if to-do-list exists in local storage
    if (getList !== null){
        todos = JSON.parse(getList)
    }

    // function to create text blocks for schedule
    for(var i=0; i<times.length; i++){
        // juse jQuery to create elements
        var newDiv = $("<div>");
        var newp = $("<p>");
        var newInput = $("<textarea>");
        var newBtn = $("<button>");

        // add class names to elements
        newDiv.addClass("row");
        newp.addClass("col-sm-1 time-block hour");
        newBtn.attr("id", milTimes[i]);
        newInput.attr("data-attribute", milTimes[i]);
        newInput.val(todos[i]);
        newp.text(times[i]);
        // use if to compare current hour to military hour and apply classes accordingly
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
        
        // declare variable to navigate from button to textarea value
        var text = $(this).siblings(".description").val();
        // variable to get individual ID of button
        var timeIndex = $(this).attr("id");
        // variable to find location of ID in milTimes array
        var milIndex = milTimes.indexOf(timeIndex);
        // redefine index item of todos to value of variable text
        todos[milIndex] = text;
        // send variable to local storage
        var strTodos = JSON.stringify(todos);
        localStorage.setItem("To-do-list", strTodos);
        
    
    });



})