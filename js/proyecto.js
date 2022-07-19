let productos = [];

let formulario;

let inputProducto;
let inputPrecio;
let inputUnidad;
let tabla;

class Producto {
    constructor(producto, precio, unidad) {
        this.producto = producto;
        this.precio = precio;
        this.unidad = unidad;
    }
}

function inicializarElementos() {
    formulario = document.getElementById("formulario");
    inputProducto = document.getElementById("producto");
    inputPrecio = document.getElementById("precio");
    inputUnidad = document.getElementById("unidad");
    tabla = document.getElementById("tablaProductos");
}
inicializarElementos();

formulario.onsubmit = (event) => {
    event.preventDefault();

    let nuevoProducto = new Producto(
        inputProducto.value,
        inputPrecio.value,
        inputUnidad.value
    );
    if (inputProducto.value != "" && inputUnidad.value != "" && inputPrecio.value != ""){
        productos.push(nuevoProducto);
        productos.reverse();
        limpiarTabla();
        agregarProductosTabla();
        formulario.reset();
    }
};

function limpiarTabla() {
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
}

function agregarProductosTabla() {
    productos.forEach((producto) => {
        let tabla = document.querySelector(".tabla");
        let filaTabla = document.createElement("tr");

        filaTabla.innerHTML = `
        <td>${producto.producto} </td>
        <td>${producto.precio} </td>
        <td>${producto.unidad} </td>
        `;
        tabla.append(filaTabla);
    });
}
