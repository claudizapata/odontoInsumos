PROYECTO DE VENTA DE INSUMOS DE ODONTOLOGÍA

Casi todo el sitio está maquetado con flexbox: display flex, flex-direction row or colum.
En las resenas.html utilicé grid para las cajas de las reseñas y gap para los márgenes.
Todos contienen la mmisma imagen en el Header de background que abarca todo el ancho y alto, y un texto en párrafo con position absolute.
La tipografía es Roboto y los íconos de las Redes sociales fueron traídos desde fonts de Awesome.

El sitio está conformado por 5 páginas web: Index - Productos - Contacto - Reseñas - Lista de productos en el Carrito de Compras. A continuación se describen:

 index.html = que es la HOME, ésta tiene los siguientes elementos: un navBar con links, de los cuales dos van a sections en la misma página index.html, y los otros tres a los demás archivos .html (productos - contacto - resenas)
 Además, contiene un Nosotros y un Footer con un mapa (iframe) y links a las demás páginas .html al igual que el navBar.

 productos.html = contiene un navBar con los links a las otras páginas .html incluido index.html, y el listado de productos. El listado de productos publicados está maquetado con flexbox mediante flex-wrap = wrap y tamaño de margen derecho para dejar calles entre las cajas.
 .El listado de productos que contiene esta página está renderizado con código js contenido en el archivo jprod1.js el código que contiene permite acceder a la api que es un archivo JSON que contiene los productos que se renderizan con sus atributos, en cada caja por cada producto.
 .Esta página permite cargar el producto que reciba el evento (click) del usuario al carrito de compras (localStorage), acá permanecen los productos hasta que se vacíe el carrito por acción del usuario.
 .En la esquina superior derecha, junto al ícono del "carrito de compras" se puede visualizar el contador de productos, ese número indica la cantidad de productos que el usuario va agregando al carrito (localStorage) o cuando borra un producto del mismo, en consecuencia ese valor va cambiando en función de la cantidad de productos contenidos en el "carrito".

 contacto.html = contiene, luego del Header, un formulario de Fromspree que permite completarlo y enviarlo a la dirección de correo configurada desde la página de Fromspree. Le incorporé validación del formato de email mediante un script que desarrollé llamado validar_correo.js. Desde contacto.html, al hacer click en "Enviar" mediante el método onClick, llamo a la función contenida en el archivo .js, en esa función se valida el formato de la dirección de email que el usuario ingresó por el input.

 resenas.html = contiene, luego del Header, un formulario diseñado con elementos html, desde el cual se puede publicar una breve reseña que queda guardada visualizada en una caja a continuación, las reseñas se van agregando, completando cada fila.

 muestraCarrito.html = es donde quedan visualizados todos los productos en forma de listado (tabla) que fueron guardados en el localStorage (carrito) desde la página productos.html

Estilos:
Cada archivo html tiene vinculado un archivo .css que le da los estilos a cada página.

JavaScript:
jprod.json es el archivo que contiene el array de productos de odontología.

jprod1.js es el archivo que contiene el código, con la promesa con async await, que trae los elementos del jprod.json y los renderiza en el productos.html. Además, contiene el código que permite cargar el producto en el carrito, para ello escucha el evento, carga el producto que recibe el click(evento) del usuario. Por cada producto que carga, incrementa el contador. Por otra parte, permite incremetar el contador de productos cada vez que el usuario hace click en "Agregar" al carrito de compras.

muestraCarrito.js: contiene el código js que permite renderizar en forma de listado, el contenido del carrito (localStorage), con los productos que fueron cargados por el usuario desde la página productos.html.

GitHub:
A la subida del proyecto al repositorio en GitHub la realicé de la siguiente manera:
Desde la carpeta del proyecto en el explorador de Windows, hago botón derecho (Git Bash), se me abre la ventana en modo comando, y allí ingreso por consola los siguientes comandos: git status - git add . - git commit -m "....." - git push -u origin main
