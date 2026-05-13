function saludar(){
    const txtNombre = document.getElementById("txtNombre");
    const anchorRespuesta = document.getElementById("anchorRespuesta");
    anchorRespuesta.innerHTML = "Hola " + txtNombre.value;
}
