fetch("./js/jprod.json")
    .then((resp) => resp.json())
    .then((jprod) => {
        const section = document.querySelector(".seccion_prod");

        section.innerHTML ="";
        jprod.forEach((prod) => {
            const html = `
                <article> 
                            <img src="../imagenes/flex_productos/${prod.imagen}" alt="${prod.nombre}">
                            <h3 class="prod_titulo">${prod.nombre}</h3>
                            <p class="prod_titulo">$${prod.precio}</p>       
                            <p class="prod_descrip">${prod.descripcion}</p>                             
                            <button type="button" class="prod__boton" >Agregar al carrito</button>
                    </article>
                `;
                section.innerHTML += html;
        });
    })
    .catch((error) => {
        console.log (error);
    });