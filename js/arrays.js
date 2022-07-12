class Producto {
    constructor(num, nombre, precio, categoria) {
        this.num = num;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrarProducto() {
        return (
            'Num: ' +
            this.num +
            ' - ' +
            ' Producto: ' +
            this.nombre +
            ' - ' +
            ' Precio: $' +
            this.precio +
            '\n'
        );
    }
}

function comprar(nombre, email, tel, productosEnCarro) {
    let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);
    alert(`${nombre}, gracias por tu compra. \nSu total es: $ ${cant}`);
}

let productos = [
    new Producto(1, "Funda", 800, "accesorios"),
    new Producto(2, "Templado", 500, "accesorios"),
    new Producto(3, "Fuente Cargador", 500, "cargadores"),
    new Producto(4, "Cable USB", 300, "cargadores"),
    new Producto(5, "iPhone X", 300000, "celulares"),
    new Producto(6, "Motorola G20", 5000, "celulares"),
    new Producto(7, "Silla Gamer", 30000, "otros"),
    new Producto(8, "Auriculares Gamer", 5000, "otros"),
];

let categorias = ["accesorios", "cargadores", "celulares", "otros"];

let productosEnCarro = [];

let categoria = "";

while (categoria != "salir" && categoria != null) {
    let aux = categorias.join(", ");
    categoria = prompt(
        'Ingrese el nombre de una categoria para comprar, de lo contrario ingrese " salir " : \nCategorias: (' +
        aux +
        ")"
    );

    if (categoria != "salir" && categoria != null) {
        let productosFiltradosPorCategoria = productos.filter(
            (item) => item.categoria == categoria
        );

        let cartel = "";
        for (let i = 0; i < productosFiltradosPorCategoria.length; i++) {
            cartel += productosFiltradosPorCategoria[i].mostrarProducto();
        }

        let numSeleccionado = parseInt(
            prompt(
                "Seleccione el número del producto que desea comprar: \n\n" + cartel
            )
        );

        let = productoParaCarro = productosFiltradosPorCategoria.find(
            (item) => item.num == numSeleccionado
        );

        if (productoParaCarro) {
            productosEnCarro.push(productoParaCarro);
        }
    }
}

if (productosEnCarro.length > 0) {
    alert("A continuación ingrese sus datos para finalizar su compra");
    let nombre = prompt("Ingrese su nombre:");
    let email = prompt("Ingrese su email:");
    let tel = prompt("Ingrese su número de celular:");
    comprar(nombre, email, tel, productosEnCarro);
}
