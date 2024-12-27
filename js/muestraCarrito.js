
//console.log(carrito);
const carrito = JSON.parse(localStorage.getItem("carrito"));
const items = document.querySelector('.linea');
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
    

