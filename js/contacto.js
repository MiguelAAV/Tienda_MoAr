document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

  // Crear spans de error debajo de cada campo
    const errorNombre = document.createElement("span");
    const errorEmail = document.createElement("span");
    const errorMensaje = document.createElement("span");

    [errorNombre, errorEmail, errorMensaje].forEach(err => {
    err.style.color = "red";
    err.style.fontSize = "13px";
    err.style.fontWeight = "bold";
    });

    nombre.insertAdjacentElement("afterend", errorNombre);
    email.insertAdjacentElement("afterend", errorEmail);
    mensaje.insertAdjacentElement("afterend", errorMensaje);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // evitar envío automático
        let valido = true;

    // limpiar mensajes anteriores
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorMensaje.textContent = "";

    // Validación nombre
    if (nombre.value.trim().length === 0) {
        errorNombre.textContent = "El nombre es requerido.";
        valido = false;
    } else if (nombre.value.trim().length > 100) {
        errorNombre.textContent = "El nombre no puede superar los 100 caracteres.";
        valido = false;
    }

    // Validación email
    if (email.value.trim().length === 0) {
        errorEmail.textContent = "El correo es requerido.";
        valido = false;
    } else if (email.value.trim().length > 100) {
        errorEmail.textContent = "El correo no puede superar los 100 caracteres.";
        valido = false;
    } else {
        const regexCorreo = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        if (!regexCorreo.test(email.value.trim())) {
        errorEmail.textContent = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        valido = false;
        }
    }

    // Validación mensaje
    if (mensaje.value.trim().length === 0) {
        errorMensaje.textContent = "El mensaje es requerido.";
        valido = false;
    } else if (mensaje.value.trim().length > 500) {
        errorMensaje.textContent = "El mensaje no puede superar los 500 caracteres.";
        valido = false;
    }

    // Si todo está correcto
    if (valido) {
        alert("✅ Formulario enviado con éxito");
        form.reset();
    }
    });
});
