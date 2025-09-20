// ---------- DATOS INICIALES ---------- //
let productos = [
    { nombre: "Xiaomii MI 10T Pro", descripcion: "Teléfono Xiaomi", precio: 699990 },
    { nombre: "Iphone 5 Pro Max", descripcion: "Teléfono Apple", precio: 299990 },
    { nombre: "Moto G Power", descripcion: "Teléfono Motorola", precio: 199990 }
];

let usuarios = [
    { nombre: "Juan Perez", rol: "Administrador", correo: "juan@mail.com" },
    { nombre: "Maria Gomez", rol: "Usuario", correo: "maria@mail.com" },
    { nombre: "Carlos Soto", rol: "Usuario", correo: "carlos@mail.com" }
];

const jframe = document.getElementById('jframe');
const jframeTitle = document.getElementById('jframeTitle');
const jframeBody = document.getElementById('jframeBody');
const closeBtn = document.getElementById('closeBtn');

// ---------- FORMATEAR PRECIO ---------- //
function formatearPrecio(valor) {
    return "$" + valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ---------- PRODUCTOS ---------- //
function abrirJFrameProductos() {
    jframeTitle.innerText = "Productos";
    jframeBody.innerHTML = "";

    const form = document.createElement('div');
    form.className = "product-form";
    form.innerHTML = `
        <input type="text" id="productoNombre" placeholder="Nombre">
        <input type="text" id="productoDescripcion" placeholder="Descripción">
        <input type="number" id="productoPrecio" placeholder="Precio">
        <button class="add">Agregar Producto</button>
    `;
    jframeBody.appendChild(form);
    form.querySelector(".add").addEventListener("click", agregarProducto);

    mostrarProductos();
    jframe.style.display = "block";
}

function mostrarProductos() {
    const existentes = jframeBody.querySelectorAll('.product-card');
    existentes.forEach(e => e.remove());

    productos.forEach((prod, index) => {
        const div = document.createElement('div');
        div.className = "product-card";
        div.innerHTML = `
            <p><strong>Nombre:</strong> ${prod.nombre}</p>
            <p><strong>Descripción:</strong> ${prod.descripcion}</p>
            <p><strong>Precio:</strong> ${formatearPrecio(prod.precio)}</p>
            <button class="update">Modificar</button>
            <button class="delete">Eliminar</button>
        `;
        jframeBody.appendChild(div);

        div.querySelector('.delete').addEventListener('click', () => {
            if(confirm(`¿Eliminar producto ${prod.nombre}?`)){
                productos.splice(index,1);
                mostrarProductos();
            }
        });

        div.querySelector('.update').addEventListener('click', () => modificarProducto(index));
    });
}

function agregarProducto() {
    const nombre = document.getElementById('productoNombre').value.trim();
    const descripcion = document.getElementById('productoDescripcion').value.trim();
    const precio = parseFloat(document.getElementById('productoPrecio').value.trim());

    if(!nombre || !descripcion || isNaN(precio) || precio <=0) {
        alert("Todos los campos son obligatorios y el precio debe ser mayor a 0.");
        return;
    }

    productos.push({nombre, descripcion, precio});
    document.getElementById('productoNombre').value = "";
    document.getElementById('productoDescripcion').value = "";
    document.getElementById('productoPrecio').value = "";
    mostrarProductos();
}

function modificarProducto(index) {
    const prod = productos[index];
    const nombre = prompt("Nombre:", prod.nombre);
    if(!nombre) return;
    const descripcion = prompt("Descripción:", prod.descripcion);
    if(!descripcion) return;
    const precio = parseFloat(prompt("Precio:", prod.precio));
    if(isNaN(precio) || precio <=0) {
        alert("Precio inválido");
        return;
    }
    productos[index] = {nombre, descripcion, precio};
    mostrarProductos();
}

// ---------- USUARIOS ---------- //
function abrirJFrameUsuarios() {
    jframeTitle.innerText = "Usuarios";
    jframeBody.innerHTML = "";

    const form = document.createElement('div');
    form.className = "user-form";
    form.innerHTML = `
        <input type="text" id="nombre" placeholder="Nombre">
        <input type="text" id="rol" placeholder="Rol">
        <input type="email" id="correo" placeholder="Correo">
        <button class="add">Agregar Usuario</button>
    `;
    jframeBody.appendChild(form);
    form.querySelector(".add").addEventListener("click", agregarUsuario);

    mostrarUsuarios();
    jframe.style.display = "block";
}

function mostrarUsuarios() {
    const existentes = jframeBody.querySelectorAll('.product-card');
    existentes.forEach(e => e.remove());

    usuarios.forEach((user,index)=>{
        const div = document.createElement('div');
        div.className = "product-card";
        div.innerHTML = `
            <p><strong>Nombre:</strong> ${user.nombre}</p>
            <p><strong>Rol:</strong> ${user.rol}</p>
            <p><strong>Correo:</strong> ${user.correo}</p>
            <button class="update">Modificar</button>
            <button class="delete">Eliminar</button>
        `;
        jframeBody.appendChild(div);

        div.querySelector('.delete').addEventListener('click', () => {
            if(confirm(`¿Eliminar usuario ${user.nombre}?`)){
                usuarios.splice(index,1);
                mostrarUsuarios();
            }
        });

        div.querySelector('.update').addEventListener('click', () => modificarUsuario(index));
    });
}

function agregarUsuario() {
    const nombre = document.getElementById('nombre').value.trim();
    const rol = document.getElementById('rol').value.trim();
    const correo = document.getElementById('correo').value.trim();

    if(!nombre || !rol || !correo){
        alert("Todos los campos son obligatorios.");
        return;
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!correoRegex.test(correo)){
        alert("Correo inválido.");
        return;
    }

    usuarios.push({nombre,rol,correo});
    document.getElementById('nombre').value="";
    document.getElementById('rol').value="";
    document.getElementById('correo').value="";
    mostrarUsuarios();
}

function modificarUsuario(index){
    const user = usuarios[index];
    const nombre = prompt("Nombre:", user.nombre);
    if(!nombre) return;
    const rol = prompt("Rol:", user.rol);
    if(!rol) return;
    const correo = prompt("Correo:", user.correo);
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!correoRegex.test(correo)){
        alert("Correo inválido.");
        return;
    }
    usuarios[index] = {nombre,rol,correo};
    mostrarUsuarios();
}

// ---------- CERRAR Y MOVER FRAME ---------- //
closeBtn.onclick = () => jframe.style.display = "none";

let isDragging = false, offsetX, offsetY;
const header = jframe.querySelector('.jframe-header');

header.addEventListener('mousedown', e => {
    isDragging = true;
    offsetX = e.clientX - jframe.offsetLeft;
    offsetY = e.clientY - jframe.offsetTop;
});

document.addEventListener('mousemove', e => {
    if (isDragging) {
        jframe.style.left = `${e.clientX - offsetX}px`;
        jframe.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => isDragging = false);
