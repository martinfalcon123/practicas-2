$(document).ready(function(){
  $("#rojo").css("background","red");
  // mouseover


  var caja= $("#caja");

    caja.mouseover(function(){

        $(this).css("background","red");
    });

        caja.mouseout(function(){
        $(this).css("background","blue");

        //evento click

        caja.click(function(){
            $(this).css("background","orange");
        })
           
        caja.dblclick(function(){
            $(this).css("background","black");
        })
           

    });
});

