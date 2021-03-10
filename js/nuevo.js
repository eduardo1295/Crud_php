bandera_email = true;
bandera_municipio = false;
opcion = "";
id_eliminar = 0;
$(document).ready(function(){      
      /*GENERACION DE LA TABLA*/
      tablaUsuarios =$('#table_id').DataTable({
        'ajax': {
          'url': "php/persona.php",
          'type': "POST",
          'data': { 'action': "mostrar_usuarios" },
          "dataSrc":""
        },
        "columns": [
          { "defaultContent": "" },
          { "data": "id" },
          { "data": "nombre" },
          { "data": "correo" },
          { "data": "telefono" },
          { "data": "carrera" },
          { "data": "curp" },
          { "data": "genero" },
          { "data": "fecha_nac" },
          { "data": "estado" },
          { "data": "municipio" },
          { "data": "localidad" },
          {
            "render": function (data, type, full, meta) {
            
            },
            sortable: false,
                 "render": function ( data, type, full, meta ) {
                     var editID = full.id;
                     var deleteID = full.id;
                     return "<div class='text-center'><div class='btn-group'><button id='"+editID+"' class='btn btn-primary btn-sm btnEditar'><i class='far fa-edit'></i></button><button id='"+deleteID+"' class='btn btn-danger btn-sm btnBorrar'><i class='fas fa-trash'></i></button></div></div>";
                 }
          }
        ],
        responsive: {
          details: {
              type: 'column'
          }
        },
        columnDefs: [ {
          className: 'control',
          orderable: false,
          targets:   0
        } ],
        order: [ 1, 'asc' ]
        });
      /*TOMAR LA INFORMACIÓN DE ESTADOS */
      console.log("Aqui comienza");
      fetch("json/estados.json").then( 
        data => console.log(data)
      );
      $.getJSON( "json/estados.json", function( data ) {
          console.log("Listo1")
      }).done(function(data){
        console.log("Listo2")
        var items = [];
        var i = 0;
        $.each( data, function( key, val ) {
          $.each( val, function( key2, val2 ) {
              if(key2 == "nombre")
                //items.push( "<li id='" + key2 + "'>" + val2+ "</li>" );
                items.push( "<option value='"+val2+"'>"+val2+"</option>" );
            i++;
          });
        });
        $("#estados").append(items.join());
      })
      /*TOMAR INFORMACION DE LOS ESTADOS*/
      $("#estados").change(function(){
        $("#municipios option:not(:first-child)").each(function() {
          $(this).remove();
        });
        
        $.getJSON( "json/estados-municipios.json", function( data ) {
          
        }).done(function(data){
          var items = [];
          var i = 0;
          $.each( data, function( key, val ) {
            if(key.toUpperCase() == $("#estados").val()){
              for (let x = 0; x < val.length; x++) {
                  items.push( "<option value='"+val[x]+"'>"+val[x]+"</option>" );  
              }
            }
          });
          $("#municipios").append(items.join());
          if(bandera_municipio){
              $("#municipios").val(datos[0]["municipio"]);
              bandera_municipio = false;
          }
            
        })
      });
      /*Agrega  persona */
      $(".btn-agregar").click(function(){

        if($("#nombre").val() == "" || $("#correo").val() == "" || $("#pass").val() == "" ||
        $("#tel").val() == "" || $("#carrera").val() == "" || $("#curp").val() == "" ||
        $("#genero").val() == "0" || $("#fecha_nac").val() == "" || $("#estados").val() == "0" ||
        $("#municipios").val() == "0"){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Falta agregar datos, revisar en el formulario'
          })
        }
        else{
          var bandera_principal = true;
          validarEmail($("#correo").val());
          var bandera_curp = curpValida($("#curp").val().toUpperCase());
          if(!bandera_email || !bandera_curp){
            bandera_principal = false;
          }
          if(opcion == "editarUsuario"){
            info ={
              action: opcion,
              id : datos[0]["id"],
              nombre: $("#nombre").val(),
              correo: $("#correo").val(),
              pass: $("#pass").val(),
              tel: $("#tel").val(),
              carrera: $("#carrera").val(),
              curp: $("#curp").val(),
              genero: $("#genero").val(),
              fecha_nac: $("#fecha_nac").val(),
              estados: $("#estados").val(),
              municipios: $("#municipios").val()
              }      
          }else{
            info ={
              action: opcion,
              nombre: $("#nombre").val(),
              correo: $("#correo").val(),
              pass: $("#pass").val(),
              tel: $("#tel").val(),
              carrera: $("#carrera").val(),
              curp: $("#curp").val(),
              genero: $("#genero").val(),
              fecha_nac: $("#fecha_nac").val(),
              estados: $("#estados").val(),
              municipios: $("#municipios").val()
            }
          }
          if(bandera_principal){
            $.ajax({
              method: "post",
              url: "php/persona.php",
              
              data: info,
              success: function(data){
                if(data == 200){
                  Swal.fire({
                    icon: 'success',
                    title: 'Agregado',
                    text: 'La persona ha sido agregada correctamente'
                  })
                  $('#exampleModalCenter').modal('toggle');
                  tablaUsuarios.ajax.reload(null, false);
                }
                if(data == 201){
                  Swal.fire({
                    icon: 'success',
                    title: 'Editados',
                    text: 'La persona ha sido editada correctamente'
                  })
                  $('#exampleModalCenter').modal('toggle');
                  tablaUsuarios.ajax.reload(null, false);
                }
              }
            })
          }
        }
        
      })
      /*Le da click al boton agregar*/
      $(".btn-add").click(function(){
        $(".modal-body .row div input").val("");
        $(".modal-header .modal-title").html("Agregar Persona");
        $("button.btn-agregar").html("Agregar");
        opcion = "agregarUsuario";
        $("#estados").val("0").change();
      })

      $(document).on("click",".btnEditar",function(){      
        opcion = "editarUsuario";  
        $(".modal-header .modal-title").html("Editar Persona");
        $("button.btn-agregar").html("Editar");
        

        $.ajax({
          method: "post",
          url: "php/persona.php",
          data:{
              action: "mostrar_usuarios",
              id : $(this).attr("id")
          },
          success: function(data){
            datos = JSON.parse(data);
            $("#nombre").val(datos[0]["nombre"])
            $("#correo").val(datos[0]["correo"])
            $("#tel").val(datos[0]["telefono"])
            $("#carrera").val(datos[0]["carrera"])
            $("#curp").val(datos[0]["curp"])
            $("#genero").val(datos[0]["genero"])
            $("#fecha_nac").val(datos[0]["fecha_nac"])
            $("#estados").val(datos[0]["estado"]).change();
            bandera_municipio = true;
          }
        }).done(function(){
          $('#exampleModalCenter').modal('toggle');
        })
        
        
      });
      
      $(document).on("click",".btnBorrar",function(){
          id_eliminar = $(this).attr("id");
          $('#ModalEliminar').modal('toggle');          
      });

      $(".btn-eliminar").click(function(){
        $.ajax({
          method: "post",
          url: "php/persona.php",
          data:{
              action: "eliminar_usuario",
              id : id_eliminar
          },
          success: function(data){
            if(data == 202){
              Swal.fire({
                icon: 'success',
                title: 'Eliminado',
                text: 'La persona ha sido eliminada correctamente'
              })
              $('#ModalEliminar').modal('toggle');
              tablaUsuarios.ajax.reload(null, false);
            }
          }
        }).done(function(){
          //$('#exampleModalCenter').modal('toggle');
        })
      });
      
      $("#tel").inputFilter(function(value) {
        return /^\d*$/.test(value);    // Allow digits only, using a RegExp
      });
      
      $("#nombre").on('input', function() {
        //this.value = this.value.replace(/[^a-zA-Z\n]/g, ''); //<-- replace all other than given set of values
      });
      $(document).on("load",".modal-open",function(){
        console.log("inicio");
      })  
      

});



//proof();

