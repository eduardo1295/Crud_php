<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Agregar persona</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
      <div class="row">
            
            <div class="col-6">
              <button class="btn btn-info w-100" id="consultar_curp" disabled >Consultar CURP</button>
            </div>
            <div class="col-6">
                <input type="text" name="" id="curp" class="form-control" placeholder="CURP" maxlength="18"  >
            </div>
            
            <div class="col-6">
                <input type="text" name="" id="nombre" class="form-control" placeholder="Nombre" maxlength="100">
            </div>
            <div class="col-6">
                <input type="text" name="" id="correo" class="form-control" placeholder="Correo"  maxlength="50">
            </div>
            <div class="col-6">
                <input type="password" name="" id="pass" class="form-control" placeholder="contraseña" maxlength="50">
            </div>
            <div class="col-6">
                <input type="text" name="" id="tel" class="form-control" placeholder="Telefono" maxlength="10">
            </div>
            <div class="col-6">
                <input type="text" name="" id="carrera" class="form-control" placeholder="Carrera" maxlength="75">
            </div>
            
            <div class="col-6">
                <select name="" id="genero" class="form-control">
                    <option value="0">Genero</option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>

                </select>
            </div>
            <div class="col-6">
                <input type="date" name="" id="fecha_nac" class="form-control">
            </div>
            <div class="col-6">
                <select name="" id="estados" class="form-control">
                    <option value="0">Estados</option>
                </select>
            </div>
            <div class="col-6">
                <select name="" id="municipios" class="form-control">
                    <option value="0">Municipio</option>
                </select>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary btn-agregar">Agregar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="ModalEliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Eliminar persona</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h4 class="text-center">¿Seguro que desea eliminar este usuario?</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-danger btn-eliminar">eliminar</button>
      </div>
    </div>
  </div>
</div>