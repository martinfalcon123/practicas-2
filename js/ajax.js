$(document).ready(function(){
    //load

    //$("#datos").load("https://reqres.in/");
    
    //get como hacer petisiones

    $.get("https://reqres.in/api/users?page=2",{page: 3},function(response){

        response.data.forEach((element, index)=>{
            $("#datos").append("<p>"+element.first_name+" "+element.last_name +"</p>");


        });
    });
   
    $("#formulario").submit(function(e){
        e.preventDefault
        var usuario ={
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        console.log(usuario);

        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        });
        



    });


});