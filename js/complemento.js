// var presionado = function (a){
//     $("#curp").val($("#curp").val().toUpperCase());
//     var curp =  $("#curp").val();
//     if(curp.length == 18){
//       var settings = {
//         "url": "https://conectame.ddns.net/rest/api.php?m=curp&user=prueba&pass=sC%7D9pW1Q%5Dc&val="+ curp,
//         "method": "GET",
//         "timeout": 0,
//       };
      
//       $.ajax(settings).done(function (response) {
//         console.log(response);
//         console.log(response.Paterno);
//         console.log(response.Paterno.charAt(0) + response.Paterno.slice(1).toLowerCase());
//       });
//     }else{
//       console.log("No Cumple");
//     }


// }
$("#curp").keyup(function() {
  
  var boton = $("#consultar_curp");
  $(this).val($(this).val().toUpperCase());
  if($(this).val().length == 18){
    boton.prop('disabled',false);
  } else {
    boton.prop('disabled',true);
  }
});
$("#consultar_curp").click(function(){
  var curp =  $("#curp").val();
    if(curp.length == 18){
      $(this).prop('disabled',false);
      var settings = {
        "url": "https://conectame.ddns.net/rest/api.php?m=curp&user=prueba&pass=sC%7D9pW1Q%5Dc&val="+ curp,
        "method": "GET",
        "timeout": 0,
        beforeSend: function () {
          console.log("Entro...");
          $("#consultar_curp").html("Procesando... <i class='far fa-hourglass'></i> ");
        },

      };
      
      $.ajax(settings).done(function (response) {
        $("#consultar_curp").html("Consultar CURP");
        console.log(response);
        console.log(response.Paterno);
        console.log(response.Paterno.charAt(0) + response.Paterno.slice(1).toLowerCase());
      }).fail(function( jqXHR, textStatus ) {
        $("#consultar_curp").html("Consultar CURP");
        // alert( "Request failed: " + textStatus );
      });
    }else{
      console.log("No Cumple");
      $(this).prop('disabled',true)
    }
});

// $("botton").click(function (e) { 
//   e.preventDefault();
  
// });

// var settings = {
//     "url": "https://conectame.ddns.net/rest/api.php?m=curp&user=prueba&pass=sC%7D9pW1Q%5Dc&val=FOQV420702HDFXSC07",
//     "method": "GET",
//     "timeout": 0,
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//     // document.write(JSON.stringify(response));
//     console.log(JSON.stringify(response));
//   });