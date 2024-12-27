
//console.log(carrito);
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const items = document.querySelector(".items");
items.innerHTML = "";

carrito.forEach((item)  => {
    const html = `
       
        <tr data-id="${item.id}" class="linea_prod">
            <td>${item.nombre}</h3>
            <td>${item.cantidad}</p>
            <td>$${item.precio}</p>
            <td>$${item.precio * item.cantidad}</p>
        </tr>

    `;
    items.html += html;

});
    

