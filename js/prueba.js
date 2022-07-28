const addCarrito = document.querySelectorAll('.agregarAlCarro');
addCarrito.forEach((agregarAlCarroButton) => {
    agregarAlCarroButton.addEventListener('click', agregarAlCarroClicked);
});

let containerCarritoProduc = document.querySelector('.containerCarritoProduc');

const botonComprar = document.querySelector('.botonComprar');
botonComprar.addEventListener('click', botonComprarClicked);

let aux = localStorage.getItem('containerCarritoProduc');

aux = nombreProduc ? JSON.parse(aux) : null;

function agregarProductoAlCarro(producto, precio) {
    let nombreProduc = containerCarritoProduc.getElementsByClassName('carritoProducNombre');
    for (let i = 0; i < nombreProduc.length; i++) {
        if (nombreProduc[i].innerText === producto) {
            let cantProduc = nombreProduc[i].parentElement.parentElement.parentElement.querySelector('.cantEnCarro');
            cantProduc.value++;
            $('.toast').toast('show');
            totalEnCarroAct();
            return;
        }
        localStorage.setItem('containerCarritoProduc', JSON.stringify(containerCarritoProduc));
    }

    const filaCarrito = document.createElement('div');
    const contenidoCarrito = `<div class="row carritoProducto">
    <div class="col-6">
        <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <h6 class="carritoProducNombre text-truncate ml-3 mb-0">${producto}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="mb-0 carritoProducPrecio">${precio}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="inputCant cantEnCarro" type="number" value="1">
            <button class="btn btn-danger botonBorrar" type="button">X</button>
        </div>
    </div>
</div>`;

    filaCarrito.innerHTML = contenidoCarrito;
    containerCarritoProduc.append(filaCarrito);

    filaCarrito.querySelector('.botonBorrar').addEventListener('click', eliminarProductosCarrito);

    filaCarrito.querySelector('.cantEnCarro').addEventListener('nuevo', cantNueva);

    localStorage.setItem('containerCarritoProduc', JSON.stringify(containerCarritoProduc));
    totalEnCarroAct();
}

function agregarAlCarroClicked(evento) {
    const button = evento.target;
    const item = button.closest('.card');
    const producto = item.querySelector('.producto').textContent;
    const precio = item.querySelector('.precio').textContent;

    agregarProductoAlCarro(producto, precio);
    localStorage.setItem('containerCarritoProduc', JSON.stringify(containerCarritoProduc));
}

function totalEnCarroAct() {
    let total = 0;
    const totalEnCarro = document.querySelector('.totalEnCarro');

    const carritoProductos = document.querySelectorAll('.carritoProducto');

    carritoProductos.forEach((carritoProducto) => {
        const carritoProducPrecioElement = carritoProducto.querySelector('.carritoProducPrecio'
        );
        const carritoProducPrecio = Number(carritoProducPrecioElement.textContent.replace('$', '')
        );
        const cantEnCarroElement = carritoProducto.querySelector('.cantEnCarro'
        );
        const cantEnCarro = Number(cantEnCarroElement.value
        );
        total = total + (carritoProducPrecio * cantEnCarro);
    });
    totalEnCarro.innerHTML = ` $ ${total.toFixed(2)}`;
    localStorage.setItem('containerCarritoProduc', JSON.stringify(containerCarritoProduc));
}

function eliminarProductosCarrito(evento) {
    const buttonClicked = evento.target;
    buttonClicked.closest('.carritoProducto').remove();
    localStorage.setItem('containerCarritoProduc', JSON.stringify(containerCarritoProduc));
    totalEnCarroAct();
}

function cantNueva(evento) {
    const input = evento.target;
    input.value <= 0 ? (input.value = 1) : null;
    localStorage.setItem('containerCarritoProduc', JSON.stringify(containerCarritoProduc));
    totalEnCarroAct();
}

function botonComprarClicked() {
    containerCarritoProduc.innerHTML = '';
    localStorage.setItem('containerCarritoProduc', JSON.stringify(containerCarritoProduc));
    totalEnCarroAct();
}