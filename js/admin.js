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

document.addEventListener('DOMContentLoaded', () => {
    // ---------- ELEMENTOS DEL DOM PRINCIPAL ----------
    const jframe = document.getElementById('jframe');
    const jframeTitle = document.getElementById('jframeTitle');
    const jframeBody = document.getElementById('jframeBody');
    const closeBtn = document.getElementById('closeBtn');

    // jframe agregar usuario (ya lo tenías)
    const jframeAddUser = document.getElementById('jframeAddUser');
    const closeAddBtn = document.getElementById('closeAddBtn');
    const btnCancelAdd = document.getElementById('btnCancelAdd');
    const formAddUser = document.getElementById('formAddUser');

    // jframe agregar producto (nuevo)
    const jframeAddProduct = document.getElementById('jframeAddProduct');
    const closeAddProductBtn = document.getElementById('closeAddProductBtn');
    const btnCancelAddProd = document.getElementById('btnCancelAddProd');
    const formAddProduct = document.getElementById('formAddProduct');

    if (!jframe || !jframeTitle || !jframeBody || !closeBtn) {
        console.error("admin.js: no se encontraron elementos del jFrame principal. Revisa que los IDs existan en el HTML.");
        return;
    }
    // advertir si faltan jframes secundarios (pero no abortar)
    if (!jframeAddUser || !formAddUser) console.warn("admin.js: falta jframeAddUser o formAddUser — funcionalidad de agregar usuario interna deshabilitada.");
    if (!jframeAddProduct || !formAddProduct) console.warn("admin.js: falta jframeAddProduct o formAddProduct — funcionalidad de agregar producto interna deshabilitada.");

    // ---------- UTIL ----------
    function formatearPrecio(valor) {
        // si es entero o decimal, formatear mil con puntos
        const num = Number(valor);
        if (isNaN(num)) return valor;
        // redondeo a 0 decimales si entero, else 2 decimales
        const esEntero = Number.isInteger(num);
        let s = esEntero ? Math.round(num).toString() : num.toFixed(2).toString();
        return "$" + s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // ---------- PRODUCTOS ----------
    function abrirJFrameProductos() {
        // asegurar que el jframeAddProduct esté cerrado
        if (jframeAddProduct) jframeAddProduct.style.display = "none";

        jframeTitle.innerText = "Productos";
        jframeBody.innerHTML = "";

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
            botonAgregarProducto.addEventListener('click', (e) => {
                e.preventDefault();
                openAddProductFrame();
            });
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

    // ---------- USUARIOS ----------
    function abrirJFrameUsuarios() {
        // asegurar que el jframeAddUser esté cerrado
        if (jframeAddUser) jframeAddUser.style.display = "none";

        jframeTitle.innerText = "Usuarios";
        jframeBody.innerHTML = "";

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
            botonAgregarUsuario.addEventListener('click', (e) => {
                e.preventDefault();
                openAddUserFrame();
            });
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

    // ---------- ABRIR / CERRAR jframeAddUser ----------
    function openAddUserFrame() {
        if (jframe) jframe.style.display = "none";
        if (!jframeAddUser) return;
        try { formAddUser.reset(); } catch(e){}
        jframeAddUser.style.display = "block";
    }

    function closeAddUserFrame() {
        if (!jframeAddUser) return;
        jframeAddUser.style.display = "none";
        // al cerrar volvemos a abrir el jframe de Usuarios y refrescamos
        abrirJFrameUsuarios();
    }

    if (closeAddBtn) closeAddBtn.onclick = () => closeAddUserFrame();
    if (btnCancelAdd) btnCancelAdd.addEventListener('click', () => closeAddUserFrame());

    if (formAddUser) {
        formAddUser.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombreCompleto = document.getElementById('add_nombreCompleto').value.trim();
            const correo = document.getElementById('add_correo').value.trim();
            const contrasena = document.getElementById('add_contrasena').value;
            const telefono = document.getElementById('add_telefono').value.trim();
            const region = document.getElementById('add_region').value.trim();
            const comuna = document.getElementById('add_comuna').value.trim();

            if (!nombreCompleto || !correo || !contrasena || !region || !comuna) {
                alert("Completa todos los campos obligatorios.");
                return;
            }
            const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!correoRegex.test(correo)) {
                alert("Correo inválido.");
                return;
            }

            const fechaIngreso = new Date().toISOString().split('T')[0];
            const nuevoUsuario = { fechaIngreso, nombreCompleto, correo, contrasena, telefono, region, comuna };

            const existe = usuarios.some(u => u.correo === nuevoUsuario.correo);
            if (existe) {
                if (!confirm("Ya existe un usuario con ese correo. ¿Deseas agregarlo igual?")) {
                    return;
                }
            }

            usuarios.push(nuevoUsuario);
            closeAddUserFrame();
        });
    }

    // ---------- ABRIR / CERRAR jframeAddProduct ----------
    function openAddProductFrame() {
        if (jframe) jframe.style.display = "none";
        if (!jframeAddProduct) return;
        try { formAddProduct.reset(); } catch(e){}
        jframeAddProduct.style.display = "block";
    }

    function closeAddProductFrame() {
        if (!jframeAddProduct) return;
        jframeAddProduct.style.display = "none";
        // al cerrar volvemos a abrir el jframe de Productos y refrescamos
        abrirJFrameProductos();
    }

    if (closeAddProductBtn) closeAddProductBtn.onclick = () => closeAddProductFrame();
    if (btnCancelAddProd) btnCancelAddProd.addEventListener('click', () => closeAddProductFrame());

    if (formAddProduct) {
        formAddProduct.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('add_prod_nombre').value.trim();
            const descripcion = document.getElementById('add_prod_descripcion').value.trim();
            const precioVal = document.getElementById('add_prod_precio').value;

            if (!nombre || !descripcion || precioVal === "") {
                alert("Completa todos los campos obligatorios.");
                return;
            }
            const precio = Number(precioVal);
            if (isNaN(precio) || precio <= 0) {
                alert("Precio inválido. Debe ser un número mayor a 0.");
                return;
            }

            const nuevoProd = { nombre, descripcion, precio };

            const existe = productos.some(p => p.nombre.toLowerCase() === nombre.toLowerCase());
            if (existe) {
                if (!confirm("Ya existe un producto con ese nombre. ¿Deseas agregarlo igual?")) {
                    return;
                }
            }

            productos.push(nuevoProd);
            closeAddProductFrame();
        });
    }

    // ---------- CERRAR Y MOVER FRAME PRINCIPAL ----------
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

    // soporte dragg para jframeAddUser
    try {
        const addHeader = jframeAddUser.querySelector('.jframe-header');
        let draggingAdd = false, offAX=0, offAY=0;
        addHeader.addEventListener('mousedown', e => {
            draggingAdd = true;
            offAX = e.clientX - jframeAddUser.offsetLeft;
            offAY = e.clientY - jframeAddUser.offsetTop;
        });
        document.addEventListener('mousemove', e => {
            if (draggingAdd) {
                jframeAddUser.style.left = `${e.clientX - offAX}px`;
                jframeAddUser.style.top = `${e.clientY - offAY}px`;
            }
        });
        document.addEventListener('mouseup', () => draggingAdd = false);
    } catch (err) { /* si no existe, ok */ }

    // soporte dragg para jframeAddProduct
    try {
        const addProdHeader = jframeAddProduct.querySelector('.jframe-header');
        let draggingProd = false, offPX=0, offPY=0;
        addProdHeader.addEventListener('mousedown', e => {
            draggingProd = true;
            offPX = e.clientX - jframeAddProduct.offsetLeft;
            offPY = e.clientY - jframeAddProduct.offsetTop;
        });
        document.addEventListener('mousemove', e => {
            if (draggingProd) {
                jframeAddProduct.style.left = `${e.clientX - offPX}px`;
                jframeAddProduct.style.top = `${e.clientY - offPY}px`;
            }
        });
        document.addEventListener('mouseup', () => draggingProd = false);
    } catch (err) { /* si no existe, ok */ }

    // Exponer funciones por si quieres llamarlas desde consola
    window.abrirJFrameUsuarios = abrirJFrameUsuarios;
    window.abrirJFrameProductos = abrirJFrameProductos;
    window.mostrarUsuarios = mostrarUsuarios;
    window.mostrarProductos = mostrarProductos;

    console.log("admin.js listo — jFrames (usuario y producto) configurados.");
});
