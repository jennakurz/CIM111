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

        $("#hide").click(function(){
          $(".instructions").hide();
        });

       $("#show").click(function(){
           $(".instructions").show();
         });

     });


  $(document).ready(function(){
$("toggle").toggle(function(){
  $(".image").toggle(1000);
});

});
