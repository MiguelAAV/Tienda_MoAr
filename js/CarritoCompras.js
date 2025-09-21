let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoBody = document.getElementById("carritoBody");
const totalElement = document.getElementById("total");
const btnVaciar = document.getElementById("vaciarCarrito");

// Renderizar carrito
function mostrarCarrito() {
    carritoBody.innerHTML = "";

    carrito.forEach((producto, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width:60px; border-radius:8px;"></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toLocaleString("es-CL")}</td>
            <td>
                <button onclick="cambiarCantidad(${index}, -1)">-</button>
                ${producto.cantidad}
                <button onclick="cambiarCantidad(${index}, 1)">+</button>
            </td>
            <td>$${(producto.precio * producto.cantidad).toLocaleString("es-CL")}</td>
            <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
        `;
        carritoBody.appendChild(fila);
    });

    actualizarTotal();
}

// Cambiar cantidad
function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    guardarCarrito();
    mostrarCarrito();
}

// Eliminar producto
function eliminarProducto(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    mostrarCarrito();
}

// Vaciar carrito
btnVaciar.addEventListener("click", () => {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
});

// Calcular total
function actualizarTotal() {
    const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    totalElement.textContent = total.toLocaleString("es-CL");
}

// Guardar en LocalStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito(); // Actualizar contador en el header
}


// Simular compra
document.getElementById("comprar").addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    alert("¡Gracias por tu compra!");
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
});

// Actualizar número en el icono del carrito (header)
function actualizarContadorCarrito() {
    const cartCount = document.querySelector(".cart-count");
    if (cartCount) {
        const total = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        cartCount.textContent = total;
    }
}


// Mostrar carrito al cargar
document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
    actualizarContadorCarrito(); // Actualizar contador en el header
});

