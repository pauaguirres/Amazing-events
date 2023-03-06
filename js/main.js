// CARDS //

document.getElementById('cardH').innerHTML = data.events.map(event => crearCard(event)).join('');


// CHECKCBOX //

let eventContainer = document.getElementById('cardH');
let categoriasUL = document.getElementById('categorias');
let categorias = [...new Set(data.events.map(event => event.category))];
categorias.forEach((categoria) => {
    let inputHTML = crearInput(categoria);
    categoriasUL.innerHTML += inputHTML;
});

// EVENTO //

let categoryCheckboxes = document.querySelectorAll('.category-checkbox');
let events = data.events;
let eventosOriginales = events;
let eventosMostrados = events;


function filtrarEventos() {
    const categoriasSeleccionadas = Array.from(categoryCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.dataset.category);

    if (categoriasSeleccionadas.length === 0) {
        eventosMostrados = eventosOriginales;
    } else {
        eventosMostrados = eventosOriginales.filter((event) =>
            categoriasSeleccionadas.includes(event.category)
        );
    }

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
