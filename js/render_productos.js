// Detectar la página actual (ejemplo: "Apple.html" -> "APPLE")
const pagina = window.location.pathname.split("/").pop().split(".")[0].toUpperCase();
console.log("Página detectada:", pagina);

const productosGrid = document.getElementById("productosGrid");

// Filtrar productos según la página
let productosFiltrados = [];

// Si es ACCESORIOS.html => mostrar todos los accesorios (sin importar marca)
if (pagina === "ACCESORIOS") {
    productosFiltrados = productos.filter(p => p.categoria === "accesorios");
}

// Si es HOME.html => mostrar 1 producto de cada marca
else if (pagina === "HOME") {
    const marcasUnicas = new Set(productos.map(p => p.marca)); // todas las marcas
    productosFiltrados = [];

    marcasUnicas.forEach(marca => {
        const prod = productos.find(p => p.marca === marca && p.categoria === "smartphones");
        if (prod) {
            productosFiltrados.push(prod); // agrega solo el primer producto encontrado de esa marca
        }
    });
}


// En caso contrario => es una página de marca (Apple, Samsung, etc.)
else {
    productosFiltrados = productos.filter(
        p => p.marca === pagina && p.categoria === "smartphones"
    );
}

// Función para renderizar productos
function mostrarProductos(lista) {
    productosGrid.innerHTML = "";

    if (lista.length === 0) {
        productosGrid.innerHTML = "<p>No hay productos disponibles.</p>";
        return;
    }

    lista.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("producto-card");
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p class="precio">$${prod.precio.toLocaleString("es-CL")}</p>
            <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
        `;
        productosGrid.appendChild(card);
    });
}

// Función para agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);

    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    actualizarContadorCarrito();
    mostrarCarrito?.(); // Llama a mostrarCarrito solo si existe (carrito.js)
    alert(`${producto.nombre} agregado al carrito`);
}

// Renderizar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productosFiltrados);
    actualizarContadorCarrito();

// === Función para actualizar el contador del carrito ===
function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contador = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    let contadorElemento = document.querySelector(".cart-count");
    if (contadorElemento) {
        contadorElemento.textContent = contador;
    }
}

});
