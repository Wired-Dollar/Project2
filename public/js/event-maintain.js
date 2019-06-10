$(document).ready(function() {
    getCategory();
    //add user selected categories
    function getCategory(category) {
        $(".addCategory").on("click", function() {
            let addToCategory = $(this).data("id");
            $.get("/api/events" + addToCategory, function(data) {
                events = data;
                location.reload();
                //consider adding if statement.  if added created displayEmpty function.
            });
        });
    };

    //search for user
    let url = window.location.search;
    let userId;
    if (url.indexOf("?user_id=") !== -1) {
        userId = url.split("=")[1];
        getEvents(userId);
    }
    // If there's no userId we just get all events as usual
    else {
        getEvents();
    }
    //get events associated with user login 
    function getEvents(user) {
        $("#new-event").on("click", function(events) {
            userId = user || "";
            if (userId) {
                userId = "/?user_id=" + userId;
            }
            $.get("/api/events" + userId, function(data) {
                events = data;
                location.reload();
                //consider adding if statement.  if added created displayEmpty function.
            });
        });
    };
    //remove events user no-longer wants
    $(".remove-status").on("click", function(events) {
        let id = $(this).data("id");
        // Delete event
        $.ajax({
            method: "DELETE",
            url: "/api/posts/" + id
        }).then(
            function() {
                console.log("event remove");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    //add new event to itinerary
    $(".create-event").on("click", function(events) {
        // Make sure to preventDefault on a submit event.
        // event.preventDefault();
        let newEvent = {
            event_name: $("#event").val().trim(),
            active: true
        };

        // Send the POST request.
        $.ajax("/api/event/", {
            type: "POST",
            data: newEvent
        }).then(
            function() {
                console.log("created new event");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    //change location to new location.
    $(".location-status").on("click", function(events) {
        let newLocation = {
            eventAddress: $("#event").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/event/", {
            type: "POST",
            data: newLocation
        }).then(
            function() {
                console.log("location changed to " + newLocation);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});