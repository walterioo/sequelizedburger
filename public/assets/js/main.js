$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).attr("data-id");
        console.log(id);
        let queryURL = "/api/burger/" + id;
        console.log(queryURL);
        
        $.ajax({
            url: queryURL,
            type: "PUT"
        }).then(() => {
            location.reload();
        })
    });

    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
            burger: $("#burger").val().trim()
        };

        let queryURL = "/api/post";
        
        $.ajax({
            url: queryURL,
            type: "POST",
            data: newBurger
        }).then(() => {
           location.reload(); 
        });
    });


})