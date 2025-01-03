const productos = [
    {
        id: 1,
        nombre: "Alginato 435gr",
        descripcion: "Con indicador de fase cromática",
        imagen: "Alginato_453gr.png",
        precio: 8000,
        stock: 40,        
    },
    {
        id: 2,
        nombre: "Composite",
        descripcion: "Flow Fusion Dental+Jeringa 2g",
        imagen: "./imagenes/flex_productos/composite.png",
        precio: 11000,
        stock: 50,        
    },
    {
        id: 3,
        nombre: "Ionómero",
        descripcion: "Cem Meron Pack Voco 35gr + Líq 15ml",
        imagen: "./imagenes/flex_productos/ionomero-15gr.png",
        precio: 63000,
        stock: 80,        
    },

    {
        id: 4,
        nombre: "Pinzas de Extracción",
        descripcion: "Para una extracción precisa y segura",
        imagen: "./imagenes/flex_productos/pinza_extraccion.png",
        precio: 63000,
        stock: 30,        
    },
    {
        id: 5,
        nombre: "Pinza Brackets",
        descripcion: "Pinza De Ortodoncia Quita Brackets",
        imagen: "./imagenes/flex_productos/Pinza-quita-brackets.png",
        precio: 68000,
        stock: 30,        
    },
    {
        id: 6,
        nombre: "Explorador y Espejo",
        descripcion: "Triada Dental Espejo+Explorador+Pinza",
        imagen: "./imagenes/flex_productos/triada-dental.png",
        precio: 5800,
        stock: 30,        
    },

    {
        id: 7,
        nombre: "Baberos",
        descripcion: "Importados Biokit pack X 100 Un",
        imagen: "./imagenes/flex_productos/babero.png",
        precio: 4800,
        stock: 30,        
    },
    {
        id: 8,
        nombre: "Barbijos",
        descripcion: "Kn 95 X 10 Un en sobre Individual Color",
        imagen: "./imagenes/flex_productos/barbijos.png",
        precio: 1720,
        stock: 30,        
    },
    {
        id: 9,
        nombre: "Vasos",
        descripcion: "Capacidad 110cc Pack x 100 Un",
        imagen: "./imagenes/flex_productos/vasos.png",
        precio: 3250,
        stock: 30,        
    },
    {
        id: 10,
        nombre: "Agujas Carpule",
        descripcion: "Carpule caja X 100 Anestesia",
        imagen:  "./imagenes/flex_productos/agujas_carpule.png",        
        precio: 15999,
        stock: 50                        
    },
    {
        id: 11,
        nombre: "Suctores para saliva",
        descripcion: "Suctores para Saliva caja X 100 Un",
        imagen: "./imagenes/flex_productos/suctores_saliva-F.png",
        precio: 6590,
        stock: 180,     
    },
];

//SECCION MATERIALES DENTALES
const listadoProductos = document.querySelector('.seccion_prod');
listadoProductos.innerHTML = "";
productos.forEach((producto) => {
    const html = `
                <article data-id="${producto.id}" class="caja_prod">
                    <img src="${producto.imagen}" alt="${producto.nombre}">          
                    <p>${producto.nombre}</p>
                    <p>$${producto.precio}</p>
                    <p>${producto.descripcion}</p>                       
                    <button type="button" class="prod__boton">Agregar al carrito</button>
                </article>
    `;
    listadoProductos.innerHTML += html;
});
//Hacemos click para COMPRAR

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];//si no hay nada en el carrito trae un array vacío

document.addEventListener("click", (event) =>{//recibe el evento click y se ejecuta un funior
    if(event.target.classList.contains("prod__boton")){
        const id=  event.target.closest("article").dataset.id;//porque "article" es el contenedor más cercano al evento(botón) que tiene el id
        const productoBusco = productos.find((producto) => producto.id == id);
        
        //console.log(productoBusco);

        const { nombre, precio} = productoBusco; //Al producto encontrado le sacó el nombre y el precio, al id ya lo tengo, me lo pasó el evento de arriba
        const producto = {//Construyo el objeto producto que elegí
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1,
        };
        
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };
});





