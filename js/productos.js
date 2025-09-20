//Array de Productos
const productos = [
    {id: 1, nombre: "Producto 1", descripcion: "Descripción del Producto 1", precio: 100},
    {id: 2, nombre: "Producto 2", descripcion: "Descripción del Producto 2", precio: 200},
    {id: 3, nombre: "Producto 3", descripcion: "Descripción del Producto 3", precio: 300},
];

const contenedorProductos = document.getElementById("productsContainer");

function mostrarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
        `;
        contenedorProductos.appendChild(div);
    });
}

mostrarProductos();
