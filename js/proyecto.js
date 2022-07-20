let productos = [];

let formulario;

let inputProducto;
let inputUnidad;
let inputPrecio;
let tabla;
let total = 0;
let cant = 0;


class Producto {
    constructor(producto, unidad, precio ) {
        this.producto = producto;
        this.unidad = unidad;
        this.precio = precio;
    }
}

function inicializarElementos() {
    formulario = document.getElementById("formulario");
    inputProducto = document.getElementById("producto");
    inputUnidad = document.getElementById("unidad");
    inputPrecio = document.getElementById("precio");
    tabla = document.getElementById("tablaProductos");
}
inicializarElementos();

formulario.onsubmit = (event) => {
    event.preventDefault();

    let nuevoProducto = new Producto(
        inputProducto.value,
        inputUnidad.value,
        inputPrecio.value
    );
    if (inputProducto.value != "" && inputUnidad.value != "" && inputPrecio.value != ""){
        productos.push(nuevoProducto);
        agregarProductosTabla();
        formulario.reset();
    }
};

function agregarProductosTabla() {
        total = total + parseInt( (productos[productos.length - 1].precio) * productos[productos.length - 1].unidad )
        cant = cant + parseInt(productos[productos.length - 1].unidad)

        let tabla = document.getElementById("tabla");
        let filaTabla = document.createElement("tr");

        filaTabla.innerHTML = `
        <td>${productos[productos.length - 1].producto} </td>
        <td>${productos[productos.length - 1].unidad} </td>
        <td>${productos[productos.length - 1].precio} </td>
        `;

        tabla.insertBefore(filaTabla, document.getElementById('tabla-total'));
        document.getElementById('cant').innerText = `Cant.: ${cant}`

        tabla.insertBefore(filaTabla, document.getElementById('tabla-total'));
        document.getElementById('total').innerText = `$${total}`
    };
