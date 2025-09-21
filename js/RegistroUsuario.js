document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const confirmarCorreo = document.getElementById("confirmarCorreo").value.trim();
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById("confirmarContrasena").value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    // Validar nombre
    if (nombre.length > 100) {
        errorMsg.textContent = "El nombre no puede superar 100 caracteres.";
        return;
    }

    // Validar correo permitido
    const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    if (!dominiosPermitidos.some(dominio => correo.endsWith(dominio))) {
        errorMsg.textContent = "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        return;
    }

    // Validar correo confirmado
    if (correo !== confirmarCorreo) {
        errorMsg.textContent = "Los correos no coinciden.";
        return;
    }

    // Validar contraseña
    if (contrasena.length < 4 || contrasena.length > 10) {
        errorMsg.textContent = "La contraseña debe tener entre 4 y 10 caracteres.";
        return;
    }

    if (contrasena !== confirmarContrasena) {
        errorMsg.textContent = "Las contraseñas no coinciden.";
        return;
    }

    alert("Registro exitoso ✅");
    this.reset();
});
