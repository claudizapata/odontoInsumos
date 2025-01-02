
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];//si no hay nada en el carrito trae un array vacío
const cargaProductos = async ()=>{
    try{
      const response = await fetch("./js/jprod.json");
      const jprod = await response.json();

      mostrarProductos(jprod);

    } catch(error) {
        console.log (error);
    }
};

/* fetch("./js/jprod.json")
    
    .then((resp) => resp.json())
    .then((jprod) => { */
const mostrarProductos = (jprod) =>{
        const section = document.querySelector('.seccion_prod');
        /* section.innerHTML =""; */
                 
        jprod.forEach((prod) => {
            const html = `
                <article data-id="${prod.id}"> 
                            <img src="./imagenes/flex_productos/${prod.imagen}" alt="${prod.nombre}">
                            <h3 class="prod_titulo">${prod.nombre}</h3>
                            <p class="prod_titulo">$${prod.precio}</p>       
                            <p class="prod_descrip">${prod.descripcion}</p>                             
                            <button type="button" class="prod__boton" id="boton" >Agregar</button>
                            <button id="myBtn" class="detalle__boton">Detalle</button>
                    </article>
                `;
                section.innerHTML += html;
         });
    };

  //Carga el producto en el carrito, para ello escucha el evento, carga el producto que recibe el click en "Agregar" por parte del usuario
    document.addEventListener("click", (event) =>{//recibe el evento click y se ejecuta un funior
        if(event.target.classList.contains("prod__boton")){
            //Obtengo el id del atributo data-id
            const id=  event.target.closest("article").dataset.id;//porque "article" es el contenedor más cercano al evento(botón) que tiene el id
              //buscar en el carrito producto
            const index = carrito.findIndex((item) => item.id === id);
              fetch("./js/jprod.json")
                .then((resp) => resp.json())
                .then((jprod) => {
             
                if (index == -1){//-1 quiere decir que no hay productos en el carrito, entonces lo carga y cantidad=1
                    //si no es -1, es porque hay productos (El arrary arranca de 0), entonces sale por else, y suma++ al que ya está con el mismo id
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
                const producto = carrito[index];//Significa que traigo ese producto que está en el carrito, porque
                //...ya fue cargado y lo cuento para ese producto con mismo id que el que ya está en el carrito(localStorage)
                producto.cantidad++;               
            }         
            //Guardo en el localStorage el array carrito en formato JSON
            localStorage.setItem('carrito', JSON.stringify(carrito));

            const sumaCantidad = carrito.reduce((sum, item) => sum + item.cantidad, 0);
            const contador = document.querySelector(".cuenta_carrito");
            const htmlContador = `
                <span id="cuenta">${sumaCantidad}</span>
              `;
              contador.innerHTML = htmlContador;
          
        })
        .catch((error) => {
            console.log(error);
        });
}
});

//Abre el detalle del Producto en el Modal
const grilla = document.querySelector(".seccion_prod");
const modal = document.getElementById("myModal");

















/* 
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];//si no hay nada en el carrito trae un array vacío

fetch("./js/jprod.json")
    
    .then((resp) => resp.json())
    .then((jprod) => {
        const section = document.querySelector('.seccion_prod');
        section.innerHTML ="";
                 
        jprod.forEach((prod) => {
            const html = `
                <article data-id="${prod.id}"> 
                            <img src="./imagenes/flex_productos/${prod.imagen}" alt="${prod.nombre}">
                            <h3 class="prod_titulo">${prod.nombre}</h3>
                            <p class="prod_titulo">$${prod.precio}</p>       
                            <p class="prod_descrip">${prod.descripcion}</p>                             
                            <button type="button" class="prod__boton" id="boton" >Agregar</button>
                    </article>
                `;
                section.innerHTML += html;

        });
    })
    .catch((error) => {
        console.log (error);
    }); 
  */