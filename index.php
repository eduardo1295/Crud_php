<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario php</title>
    <script src="js/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/bootstrap.min.js"></script>
    <script src="js/validacion.js"></script>
    <script src="js/script.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.5/css/responsive.dataTables.min.css">
    <link rel="stylesheet" href="css/style.css">

    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script>
    <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js "></script>
    <script src="https://cdn.datatables.net/responsive/2.2.5/js/dataTables.responsive.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="https://kit.fontawesome.com/9417fd5572.js" crossorigin="anonymous"></script>
</head>
<body>
    
    <div class="container">
    
        <header>
            <h1 class="text-center">Registro de personas</h1>
            <button type="button" class="btn btn-primary btn-add" data-toggle="modal" data-target="#exampleModalCenter">Agregar</button>  
        </header>
        <?php include("tabla.php")?>    
    </div>
    
    <?php include("modal.php")?>
    <script src="js/complemento.js"></script>
</body>
</html>