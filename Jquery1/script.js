$(document).ready(function(){

  $("#hide").click(function(){
    $(".ingredients").hide();
});

$("#show").click(function(){
  $(".ingredients").show();
});

});



$(document).ready(function(){
 $("#hover").mouseenter(function(){
              $(".tip").show();
         });
             $("#hover").mouseleave(function(){
                 $(".tip").hide();
             });

             });



  $(document).ready(function(){

    $("#show2").click(function(){
        $("#instructions").show();
      });

        $("#hide2").click(function(){
          $("#instructions").hide();
        });



     });


  $(document).ready(function(){
$("#toggle").click(function(){
  $("#finalcookies").toggle(2000);
});


$("#toggle").click(function(){
  $("#finalcookies").show();
});

$("#finalcookies").hover(function(){
  $("#replacetext").show();
});
});


$("#replace").hover(function(){
  $("#replace2").html("<p> Directions</p>");
});
});


$("#title1").hover(function(){
  $("h1").css("color", "brown");
})
