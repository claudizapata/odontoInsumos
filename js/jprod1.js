const carrito = JSON.parse(localStorage.getItem("carrito")) || [];//si no hay nada en el carrito trae un array vacío

fetch("./js/jprod.json")
    
    .then((resp) => resp.json())
    .then((jprod) => {
        const section = document.querySelector('.seccion_prod');
        section.innerHTML ="";
                 
        jprod.forEach((prod) => {
            const html = `
                <article data-id="${prod.id}"> 
                            <img src="../imagenes/flex_productos/${prod.imagen}" alt="${prod.nombre}">
                            <h3 class="prod_titulo">${prod.nombre}</h3>
                            <p class="prod_titulo">$${prod.precio}</p>       
                            <p class="prod_descrip">${prod.descripcion}</p>                             
                            <button type="button" class="prod__boton" id="boton" >Agregar al carrito</button>
                    </article>
                `;
                section.innerHTML += html;

        });
    })
    .catch((error) => {
        console.log (error);
    }); 
 
   
    
    document.addEventListener("click", (event) =>{//recibe el evento click y se ejecuta un funior
        if(event.target.classList.contains("prod__boton")){
            const id=  event.target.closest("article").dataset.id;//porque "article" es el contenedor más cercano al evento(botón) que tiene el id
              //buscar en el carrito producto
              const index = carrito.findIndex((item) => item.id === id);
              fetch("./js/jprod.json")
                .then((resp) => resp.json())
                .then((jprod) => {
             
                if (index == -1){     
                    const productoBusco = jprod.find((producto) => producto.id == id);                
                    //console.log(productoBusco);        
                    const { nombre, precio} = productoBusco; //Al producto encontrado le sacó el nombre y el precio, al id ya lo tengo, me lo pasó el evento de arriba
                    const producto = {//Construyo el objeto producto que elegí
                        id: id,
                        nombre: nombre,
                        precio: precio,
                        cantidad: 1,
                    };
                
                carrito.push(producto);           
            } else{
                const producto = carrito[index];
                producto.cantidad++;
            }
            //Guardo en el localStorage el array carrito en formato JSON
            localStorage.setItem('carrito', JSON.stringify(carrito));
        })
}
});

  /*  
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];//si no hay nada en el carrito trae un array vacío

document.addEventListener("click", (event) =>{//recibe el evento click y se ejecuta un funior
    if(event.target.classList.contains("prod__boton")){
        const article=  event.target.closest("article");//porque "article" es el contenedor más cercano al evento(botón) que tiene el id
        const id = article.dataset.id;
        
       
        fetch("/js/jprod.json")
            .then((resp) => resp.json())
            .then((jprod) => {
                const productoBusco = jprod.find((producto) => producto.id === id);
                 console.log(productoBusco);

                const { nombre, precio } = productoBusco;
                const producto = {
                    id: id,
                    nombre: nombre,
                    precio: precio,
                    cantidad: 1,
                };
                
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            console.log(carrito);

        })
        .catch((error) => {
            console.log(error);
        });
    }
}); */

