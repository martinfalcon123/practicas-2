$(document).ready(function(){

    $('.elemento').draggable();//para mover un elemnto por la pagina
 
 
    //redimensionar
    $('.elemento').resizable();
    //para mover un elemnto por la pagina

    //para redimenionar  por la pagina
    //$('.lista_seleccionable').selectable();
    
    //para mover en la lista    
    $('.lista_seleccionable').sortable({
    update:function(event, ui){
        console.log('ha cambiado la lista');
        }
    });

        //drop
        $("#elemento-movido").draggable();

        $("#area").droppable({
            drop: function(){
                console.log('has solatad algo dentro');
            }
        });
                //efecto

                $("#mostrar").click(function(){
                    $(".caja-efectos").toggle("scale",4000);


                });

                    //Tooltip

                    
                    $(document).tooltip();

                    //dialog
                    $("#lanzar").click(function(){
                        $("#popud").dialog();
                    });


                    //datepicker

                    $("#calendario").datepicker();

                    //tabs

                    $("#pestanas").tabs();
        


});

