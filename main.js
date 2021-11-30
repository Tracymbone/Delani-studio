$(document).ready(function() {
    $("#design").click(function() {
        $("#designtext").toggle();

    })
})
$(document).ready(function() {
    $("#development").click(function() {
        $("#developmenttext").toggle();

    })
})
$(document).ready(function() {
    $("#projectmanagement").click(function() {
        $("#projectmanagementtext").toggle();

    })
})


 
  $(document).ready(function(){ 
    $(".blankdivs").hover(function(){
      $(this).css("background-color", "rgba(0,0,0,0.5)");
      $(".assets").css("color","white");
$(".asset s").css("border", "2px solid white");
      }, function(){
      $(this).css("background-color", "transparent");
$(".assets").css("color", "inherit");
$(".assets").css("border", "2px solid transparent");
    });
  });

