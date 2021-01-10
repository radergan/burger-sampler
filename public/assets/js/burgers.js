$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
      var new_devoured = $(this).data("devoured");

      var consumed = {
        devoured: new_devoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: consumed
      });
      
      location.reload();
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var new_burger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: new_burger
      }).then(
        function() {
          console.log("added new burger");
          location.reload();
        }
      );
    });
  });
  