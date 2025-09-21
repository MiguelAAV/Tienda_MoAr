// Obtener elementos
const modal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");

// Abrir modal
loginBtn.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "flex";
};

// Cerrar modal al presionar la X
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

  /* LOGIN SIMPLE: usuario "esteban" / pass "1234" -> redirige a Administrador.html
    Además guarda el usuario en localStorage para mostrar "Hola, Esteban | Cerrar sesión" en el header. */
  (function(){
    const modal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeBtn = modal ? modal.querySelector('.close') : null;
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    // Mostrar modal (centrado)
    function showModal(e){
      if (e) e.preventDefault();
      if (!modal) return;
      modal.style.display = 'flex';
      if (loginError) { loginError.style.display = 'none'; loginError.textContent = ''; }
      const inputUser = document.getElementById('usuario');
      if (inputUser) inputUser.focus();
    }

    // Ocultar modal
    function hideModal(){
      if (!modal) return;
      modal.style.display = 'none';
    }

    // Abrir modal al hacer click en el enlace del header
    if (loginBtn) loginBtn.addEventListener('click', showModal);
    // Cerrar al hacer click en la X del modal
    if (closeBtn) closeBtn.addEventListener('click', hideModal);
    // Cerrar al hacer click fuera del contenido
    window.addEventListener('click', function(event){
      if (event.target === modal) hideModal();
    });

    // Actualiza el estado del link del header (Login <-> Hola, user | Cerrar sesión)
    function refreshLoginState() {
      const user = localStorage.getItem('moar_logged_user');
      const link = document.getElementById('loginBtn');
      if (!link) return;

      if (user) {
        // mostrar saludo + opción de logout
        link.textContent = `Hola, ${user} | Cerrar sesión`;
        link.href = "#";
        link.onclick = function(e){
          e.preventDefault();
          localStorage.removeItem('moar_logged_user');
          refreshLoginState();
        };
      } else {
        // volver a comportamiento por defecto (abrir modal)
        link.textContent = 'Login';
        link.href = "#";
        link.onclick = showModal;
      }
    }

    // Manejo del submit del formulario de login
    if (loginForm) {
      loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        if (!loginError) return;

        const usuario = (document.getElementById('usuario') || {}).value.trim();
        const password = (document.getElementById('password') || {}).value || "";

        // Credenciales simples solicitadas: esteban / 1234
        if (usuario === 'esteban' && password === '1234') {
          // Guardamos el usuario (demo) y redirigimos a Administrador.html en la misma pestaña
          localStorage.setItem('moar_logged_user', 'Esteban');

          hideModal();
          window.location.href = 'Administrador.html'; // <--- ruta que pediste
        } else {
          // Mostrar error breve
          loginError.textContent = 'Usuario o contraseña incorrectos.';
          loginError.style.display = 'block';
          // Ocultar el mensaje automáticamente después de 3s
          setTimeout(() => {
            if (loginError) loginError.style.display = 'none';
          }, 3000);
        }
      });
    }

    // Inicializar estado (por si ya había sesión guardada)
    refreshLoginState();
  })();

