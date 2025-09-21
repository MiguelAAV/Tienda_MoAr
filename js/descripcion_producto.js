// Obtener parámetro ID de la URL
const params = new URLSearchParams(window.location.search);
const idProducto = parseInt(params.get("id"));


// Buscar producto en la lista
const producto = productos.find(p => p.id === idProducto);

if (producto) {
    document.getElementById("productoDetalle").innerHTML = `
        <h2>${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p><strong>Marca:</strong> ${producto.marca}</p>
        <p><strong>Modelo:</strong> ${producto.modelo}</p>
        <p><strong>Precio:</strong> $${producto.precio.toLocaleString("es-CL")}</p>
        <p><strong>Descripción:</strong> ${producto.descripcion}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
} else {
    document.getElementById("productoDetalle").innerHTML = "<p>Producto no encontrado.</p>";
}
