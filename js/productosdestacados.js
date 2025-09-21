// Arreglo de productos
const productos = [
    {
        id: 1,
        nombre: "Honor 400 Lite 256 GB Negro + Choice X7 Lite",
        precio: 299990,
        imagen: "image/productos/honor/Honor 400 Lite 256 GB Negro + Choice X7 Lite/gs-gs-honor_-_400_lite_black10.jpg"
    },
    {
        id: 2,
        nombre: "iPhone 16 Pro Max Desierto-256 GB",
        precio: 1359990,
        imagen: "image/productos/apple/iPhone 16 Pro Max Desierto-256 GB/iphone_16_pro_max_desert_titanium_pdp_image_position_1__gens.jpg"
    },
    {
        id: 3,
        nombre: "Xiaomi Redmi Watch 5 Active",
        precio: 45990,
        imagen: "image/productos/accesorios/Xiaomi Redmi Watch 5 Active/xiaomi_redmi_watch_5_active_2_ok.jpg"
    },
    {
        id: 4,
        nombre: "Apple AirPods 4",
        precio: 150990,
        imagen: "image/productos/accesorios/Apple AirPods 4/gs-airpods_4-_v_1.jpg"
    }
];

const productosGrid = document.getElementById("productosGrid");

// Generar productos dinámicamente
function mostrarProductos() {
    productosGrid.innerHTML = "";
    productos.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio.toLocaleString("es-CL")}</p>
            <button onclick="agregarAlCarrito(${prod.id})">Añadir al carrito</button>
        `;
        productosGrid.appendChild(div);
    });
}

mostrarProductos();

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para añadir producto
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const productoEnCarrito = carrito.find(p => p.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    actualizarCarritoUI();
}

// Guardar en LocalStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Mostrar cantidad en el ícono del carrito
function actualizarCarritoUI() {
    const cartCount = document.querySelector(".cart-count");
    const totalItems = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    cartCount.textContent = totalItems;
}

// Cargar carrito al iniciar
document.addEventListener("DOMContentLoaded", () => {
    actualizarCarritoUI();
});


