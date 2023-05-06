function mostrarFecha() {
    // Obtener la fecha actual
    var date = new Date();
  
    // Formatear la fecha como dd/mm/yyyy
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var fechaFormateada = dd + "/" + mm + "/" + yyyy;
  
    // Mostrar la fecha en el elemento HTML
    document.getElementById("date_now").innerHTML = fechaFormateada;
  }