/* let memoria = JSON.parse(localStorage.getItem("./js/jprod.json")) || [];
const seccion = document.querySelector(".seccion_prod");

function crearTarjetaProducto(prods){
    prods.forEach(prod => {
        const nuevaTarjeta = document.createElement("article");
        nuevaTarjeta.classList = "caja_prod";
        nuevaTarjeta.innerHTML = `
                                       <img src="../imagenes/flex_productos/${prod.imagen}" alt="${prod.nombre}">
                                    <h3 class="prod_titulo">${prod.nombre}</h3>
                                    <p class="prod_titulo">$${prod.precio}</p>       
                                    <p class="prod_descrip">${prod.descripcion}</p>                             
                                    <button type="button" class="prod__boton" >Agregar al carrito</button>
                        `;
                        seccion.appendChild(nuevaTarjeta);
        
    });

}
crearTarjetaProducto(memoria);
                    */

// Select the element 
function boton(){
    var button = document.getElementById('boton'); // Attach the event listener
    console.log("boton");
    button.addEventListener('click', function() { alert('Button was clicked!'); });
};