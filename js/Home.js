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
