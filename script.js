
$(document).ready(function(){
// Set current date variable with moment js and add to page //
var currentDate = (moment().format("MMMM D, YYYY"))
    $("#currentDay").text(currentDate);
    //console.log(currentDate)
});
// Set current time hour //
var currentTime = moment().hour();
    //console.log(currentTime);

//Set textarea background color based on relation to current time //
var timeblock = [ 9, 10, 11, 12, 13, 14, 15, 16, 17]

    for (i=0; i < timeblock.length; i++){
        var timeid = "#" + (i+9)
        if ( timeblock[i] === currentTime){
            $(timeid).addClass("present");
            //console.log(timeid)
        }
        else if (timeblock[i] < currentTime){
            $(timeid).addClass("past");
            //console.log(timeid)
        }
        else if (timeblock[i] > currentTime){
            $(timeid).addClass("future");
            //console.log(timeid)
        }
    }

   //Listen for saved button click and add textarea data to local storage//
    $(".saveBtn").click(function(){
        //var savedtime = $(this).attr("data-value");
        var descriptionInput = $(this).siblings(".description").val();
        //console.log(descriptionInput); 
        var descriptionId = $(this).siblings(".description").attr("id");
        //console.log(descriptionId); 
        localStorage.setItem(descriptionId,descriptionInput);
    });
    //Add saved events to page after refresh //
    function renderSavedDescriptions(){
        $(".description").each(function(){
            var SavedId = $(this).attr("id");
            //console.log(SavedId);
            $(this).val(localStorage.getItem(SavedId));
        });
    };
    renderSavedDescriptions();
    //Clear Local Storage//
    $(".cleardata").click(function(){
        localStorage.clear();
        renderSavedDescriptions();
    });