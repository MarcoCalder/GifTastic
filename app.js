// Create an array of topics
var topics = ["Darth Vader", "Hannibal Lecter", "Thanos", "Scar", "Agent Smith"]
var gifDiv
var gifImage
var imageDiv
// add new topics
$("#add-topic").on("click", function (event) {
    event.preventDefault();
    var topic = $("#topic-input").val().trim();
    //create the button for each topic
    $("#button-container")
    function makeButton(villain) {
        var button = $("<button>");
        button.text(villain)
        $("#button-container").append(button)
    }

    $(document).ready(function () {
        // Handler for .ready() called.
        // for loop to make all the buttons
        for (var i = 0; i < topics.length; i++) {
            var currentTopic = topics[i]
            makeButton(currentTopic)
// Show the GIfs on the page
            function displayGifs() {
                var topic = $(this).attr("topic-input");
                var queryURL = "https:api.giphy.com/v1/gifs/search?api_key=WVTMtN2UZtWLn2vhLvb7FPpKvg1pxwpt&q=" +  topic + "&limit=10&offset=0&rating=PG&lang=en";
            }
        
        });

// make the gif stop on the page
var imageDiv = $("<div>");
          	imageDiv.addClass("play");
          	imageDiv.attr("data-state", "still");
          	imageDiv.attr("data-name", topic);
          	imageDiv.attr("data-still", response.data[i].images.fixed_height_still.url);
              imageDiv.attr("data-animate",response.data[i].images.fixed_height.url)
   
              
    // Play the gif
    function playGif () {

		if ($(this).attr("data-state") == "still") {
			$(this).html("<img src='" + $(this).attr("data-animate") + "'>");
			$(this).attr("data-state", "animate");
		}
		else {
			$(this).html("<img src='" + $(this).attr("data-still") + "'>");
			$(this).attr("data-state", "still");
		}

	};
