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

  const request = new XMLHttpRequest();

  request.open('GET', 'https://www.dolarsi.com/api/api.php?type=valoresprincipales', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Si la solicitud es exitosa, hacer algo con la respuesta
      const data = JSON.parse(request.responseText);
      var nacion = data[0]['casa']['venta'];
      var libre = data[1]['casa']['venta'];
      var mep  = data[4]['casa']['venta'];
      var ccl = data[3]['casa']['venta'];
      document.getElementById("nacion").innerHTML = nacion;
      document.getElementById("libre").innerHTML = libre;
      document.getElementById("mep").innerHTML = mep;
      document.getElementById("ccl").innerHTML = ccl;
      console.log(data);
    } else {
      document.getElementById("nacion").innerHTML = 0.0;
      document.getElementById("libre").innerHTML = 0.0;
      document.getElementById("mep").innerHTML = 0.0;
      document.getElementById("ccl").innerHTML = 0.0;
      // Si la solicitud falla, hacer algo con el error
      console.error('Error en la solicitud');
    }
  };

  request.onerror = function () {
    document.getElementById("nacion").innerHTML = 0.0;
    document.getElementById("libre").innerHTML = 0.0;
    document.getElementById("mep").innerHTML = 0.0;
    document.getElementById("ccl").innerHTML = 0.0;
    console.error('Error en la solicitud');
  };

  request.send();
}

