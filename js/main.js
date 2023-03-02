const eventContainer = document.getElementById('cardH');

// LA FUNCION MAP() itera sobre cada objeto en el array 'data.events'
// y genera una cadena de texto HTML para cada evento utilizando sus propiedades como nombre,
// descripción, precio e imagen. Estas cadenas de texto se almacenan en un array llamado 'cards'.

const cards = data.events.map((event) => `
    <div class="card" style="width: 14rem;">
        <img src="${event.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p>$ ${event.price}</p>
            <a href="./Details.html" class="btn btn-primary">Ver más...</a>
        </div>
    </div>
`);
// Luego, la variable cardHTML se inicializa al unir todas las cadenas de texto
// en el arreglo cards con el método join(), que devuelve una cadena de texto
// con todos los elementos separados por una coma (o cualquier otro carácter que se pase como argumento).
const cardHTML = cards.join('');

// Finalmente, se asigna la cadena de texto resultante a la propiedad innerHTML
// del contenedor de eventos en el HTML con eventContainer.innerHTML = cardHTML;.
// Esto agrega todos los elementos generados dinámicamente al contenedor en el HTML.
eventContainer.innerHTML = cardHTML;



function crearInput(category) {
    return `
        <li class="flex-wrap">
            <div class="form-check">
                <input class="form-check-input category-checkbox" type="checkbox" value="${category}" data-category="${category}">
                <label class="form-check-label" for="inlineCheckbox1">${category}</label>
            </div>
        </li>
    `;
}


// Obtener el elemento ul que contiene los checkbox
const categoriasUL = document.getElementById('categorias');

// Crear un array con todas las categorías sin repetir
const categorias = [...new Set(data.events.map(event => event.category))];

// Iterar sobre las categorías y crear un input para cada una
categorias.forEach((categoria) => {
    const inputHTML = crearInput(categoria);
    categoriasUL.innerHTML += inputHTML;
});

// Este código obtiene el elemento ul con el id "categorias",
// luego crea un array de categorías únicas usando el método map() en data.events
// y luego Set() para eliminar los valores duplicados. Finalmente, itera sobre las
// categorías y crea un input para cada una utilizando la función crearInput() y
// luego lo agrega al elemento ul usando el atributo innerHTML.


// EVENTO //

const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
const events = data.events;
let eventosMostrados = events;

// Función para filtrar los eventos
function filtrarEventos() {
  // Obtener todas las categorías seleccionadas
    const categoriasSeleccionadas = Array.from(categoryCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.dataset.category);

  // Filtrar los eventos en función de las categorías seleccionadas
eventosMostrados = events.filter((event) =>
    categoriasSeleccionadas.includes(event.category)
);

  // Actualizar la lista de eventos mostrados
actualizarEventos();
}

// Escuchar cambios en los checkboxes
categoryCheckboxes.forEach((checkbox) => {
checkbox.addEventListener('change', filtrarEventos);
});

// Función para actualizar los eventos mostrados
function actualizarEventos() {
const cards = eventosMostrados.map((event) => `
    <div class="card" style="width: 14rem;">
    <img src="${event.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p>$ ${event.price}</p>
        <a href="./Details.html" class="btn btn-primary">Ver más...</a>
    </div>
    </div>
`);

const cardHTML = cards.join('');
eventContainer.innerHTML = cardHTML;
}

// Mostrar todos los eventos al principio
actualizarEventos();

