function enviar_mensaje()
{   
    $.ajax({
      type: "GET",
      url:'https://agroindustrialhyh.com/es/enviar.php',
      data:$('#form_contactenos_web').find('input, select, textarea, button').serialize(), 
       beforeSend: function(objeto){
       //$('#loader').html('<img src=""> Cargando...');
      },
      success:function(data){

        //$('#loader').html('');
        //$("#btn-curso-web").click();
        $(".resultados_contactenos_web").html(data);
      }
    })
}