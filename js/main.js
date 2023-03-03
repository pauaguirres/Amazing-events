// CARDS //

document.getElementById('cardH').innerHTML = data.events.map(event => crearCard(event)).join('');


// CHECKCBOX //

let eventContainer = document.getElementById('cardH');
const categoriasUL = document.getElementById('categorias');
const categorias = [...new Set(data.events.map(event => event.category))];
categorias.forEach((categoria) => {
    const inputHTML = crearInput(categoria);
    categoriasUL.innerHTML += inputHTML;
});

// EVENTO //

const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
const events = data.events;
let eventosMostrados = events;

function filtrarEventos() {
    const categoriasSeleccionadas = Array.from(categoryCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.dataset.category);

eventosMostrados = events.filter((event) =>
    categoriasSeleccionadas.includes(event.category)
);

actualizarEventos();
}

categoryCheckboxes.forEach((checkbox) => {
checkbox.addEventListener('change', filtrarEventos);
});

function actualizarEventos() {
    const cardHTML = eventosMostrados.map(event => crearCard(event)).join('');
    eventContainer.innerHTML = cardHTML;
}

actualizarEventos();

