
$(function() {
    $(".change-ready").on("click", function(event) {
      var id = $(this).data("id");
      var newReady = $(this).data("newready");
  
      var newReadyState = {
        ready: newReady
      };
  
     
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newReadyState
      }).then(
        function() {
          console.log("changed availability to", newReady);
 
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {

      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        ready: $("[name=ready]:checked").val().trim()
      };
  

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");

          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  

      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
 
          location.reload();
        }
      );
    });
  });
  