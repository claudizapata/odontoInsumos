function validarCorreo(mail){
    var correcto= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;                         
    var esValido= correcto.test(mail);
    if (esValido==true){
        alert("El correo es válido");
    }
    else{
        alert('El correo NO es válido');

    }
}
