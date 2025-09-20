// ---------- DATOS INICIALES ---------- //
let productos = [
    { nombre: "Xiaomii MI 10T Pro", descripcion: "Teléfono Xiaomi", precio: 699990 },
    { nombre: "Iphone 5 Pro Max", descripcion: "Teléfono Apple", precio: 299990 },
    { nombre: "Moto G Power", descripcion: "Teléfono Motorola", precio: 199990 }
];

let usuarios = [
    {
        fechaIngreso: "2023-01-15",
        nombreCompleto: "Juan Perez",
        correo: "juan@mail.com",
        contrasena: "123456",
        telefono: "912345678",
        region: "Metropolitana",
        comuna: "Santiago"
    },
    {
        fechaIngreso: "2023-02-20",
        nombreCompleto: "Maria Gomez",
        correo: "maria@mail.com",
        contrasena: "abcdef",
        telefono: "",
        region: "Valparaíso",
        comuna: "Viña del Mar"
    },
    {
        fechaIngreso: "2023-03-10",
        nombreCompleto: "Carlos Ruiz",
        correo: "carlos@mail.com",
        contrasena: "123456",
        telefono: "987654321",
        region: "Metropolitana",
        comuna: "Santiago"
    }
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
    jframeBody.innerHTML = ""; // Limpiar contenido

    // Crear botón "Agregar Producto" solo si no existe
    if (!document.getElementById('btnAgregarProducto')) {
        const botonAgregarProducto = document.createElement('button');
        botonAgregarProducto.id = "btnAgregarProducto";
        botonAgregarProducto.innerText = "Agregar Producto";
        botonAgregarProducto.style.marginBottom = "15px";
        botonAgregarProducto.style.backgroundColor = "#28a745";
        botonAgregarProducto.style.color = "white";
        botonAgregarProducto.style.border = "none";
        botonAgregarProducto.style.padding = "8px 12px";
        botonAgregarProducto.style.borderRadius = "4px";
        botonAgregarProducto.style.cursor = "pointer";
        botonAgregarProducto.onclick = () => window.open("agregar_producto.html", "_blank");
        jframeBody.appendChild(botonAgregarProducto);
    }

    mostrarProductos();
    jframe.style.display = "block";
}

function mostrarProductos() {
    jframeBody.querySelectorAll('.product-card').forEach(e => e.remove());

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
    productos[index] = { nombre, descripcion, precio };
    mostrarProductos();
}

// ---------- USUARIOS ---------- //
function abrirJFrameUsuarios() {
    jframeTitle.innerText = "Usuarios";
    jframeBody.innerHTML = ""; // Limpiar contenido

    // Crear botón "Agregar Usuario" solo si no existe
    if (!document.getElementById('btnAgregarUsuario')) {
        const botonAgregarUsuario = document.createElement('button');
        botonAgregarUsuario.id = "btnAgregarUsuario";
        botonAgregarUsuario.innerText = "Agregar Usuario";
        botonAgregarUsuario.style.marginBottom = "15px";
        botonAgregarUsuario.style.backgroundColor = "#007bff";
        botonAgregarUsuario.style.color = "white";
        botonAgregarUsuario.style.border = "none";
        botonAgregarUsuario.style.padding = "8px 12px";
        botonAgregarUsuario.style.borderRadius = "4px";
        botonAgregarUsuario.style.cursor = "pointer";
        botonAgregarUsuario.onclick = () => window.open("AgregarUsuario.html", "_blank");
        jframeBody.appendChild(botonAgregarUsuario);
    }

    mostrarUsuarios();
    jframe.style.display = "block";
}

function mostrarUsuarios() {
    jframeBody.querySelectorAll('.product-card').forEach(e => e.remove());

    usuarios.forEach((user,index)=>{
        const div = document.createElement('div');
        div.className = "product-card";
        div.innerHTML = `
            <p><strong>Fecha Ingreso:</strong> ${user.fechaIngreso}</p>
            <p><strong>Nombre Completo:</strong> ${user.nombreCompleto}</p>
            <p><strong>Correo:</strong> ${user.correo}</p>
            <p><strong>Contraseña:</strong> ${user.contrasena}</p>
            <p><strong>Teléfono:</strong> ${user.telefono || '-'}</p>
            <p><strong>Región:</strong> ${user.region}</p>
            <p><strong>Comuna:</strong> ${user.comuna}</p>
            <button class="update">Modificar</button>
            <button class="delete">Eliminar</button>
        `;
        jframeBody.appendChild(div);

        div.querySelector('.delete').addEventListener('click', () => {
            if(confirm(`¿Eliminar usuario ${user.nombreCompleto}?`)){
                usuarios.splice(index,1);
                mostrarUsuarios();
            }
        });

        div.querySelector('.update').addEventListener('click', () => modificarUsuario(index));
    });
}

function modificarUsuario(index){
    const user = usuarios[index];
    const fechaIngreso = prompt("Fecha de ingreso (YYYY-MM-DD):", user.fechaIngreso);
    if(!fechaIngreso) return;
    const nombreCompleto = prompt("Nombre completo:", user.nombreCompleto);
    if(!nombreCompleto) return;
    const correo = prompt("Correo:", user.correo);
    const contrasena = prompt("Contraseña:", user.contrasena);
    const telefono = prompt("Teléfono (opcional):", user.telefono);
    const region = prompt("Región:", user.region);
    const comuna = prompt("Comuna:", user.comuna);

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!correoRegex.test(correo)) {
        alert("Correo inválido");
        return;
    }

    usuarios[index] = {
        fechaIngreso, nombreCompleto, correo, contrasena, telefono, region, comuna
    };
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
