
//console.log(carrito);
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const items = document.querySelector(".items");
items.innerHTML = "";

carrito.forEach((item)  => {
    const html = `       
        <tr data-id="${item.id}" class="linea_prod">
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio}</td>
            <td>$${item.precio * item.cantidad}</td>
        </tr>

    `;
    items.innerHTML += html;

});
  //Calcula la suma total de los precios
  const sumaTotal = carrito.reduce((sum,item) => sum + (item.precio * item.cantidad), 0);
  const suma = document.getElementById("suma");
  const htmlSuma = `
     <p class="sumaTotal">Total: \n \n $${sumaTotal}</p>
    `;
    suma.innerHTML = htmlSuma;
