//let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem('carrito'));
    console.log(memoria);
    if (!memoria){
        const prodAlCarrito = producto;
        prodAlCarrito.cantidad = 1;
        localStorage.setItem("carrito", JSON.stringify([prodAlCarrito]));
    }
};

//console.log(carrito);

/* const items = document.querySelector('.linea');
items.innerHTML = "";
carrito.forEach((item)  => {
    const html = `
       
        <div data-id="${item.id}" class="linea_prod">
            <h3>${item.nombre}</h3>
            <p>${item.cantidad}</p>
            <p>$${item.precio}</p>            
        </div>

    `;
    items.html += html;

});
    

 */