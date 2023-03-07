// CARDS //
let eventContainer = document.getElementById('cardU');
let cards = '';
let eventosOriginales = [];
let eventosMostrados = [];

for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (event.date > data.currentDate) {
        cards += crearCard(event);
        eventosOriginales.push(event);
        eventosMostrados.push(event);
    }
}

eventContainer.innerHTML = cards;

// CHECKBOXES //

let categoriasUL = document.getElementById('categorias');
let categorias = [...new Set(data.events.map(event => event.category))];
categorias.forEach((categoria) => {
    let inputHTML = crearInput(categoria);
    categoriasUL.innerHTML += inputHTML;
});

// EVENTO PARA FILTRAR CARDS CON CHECKBOX //
let checkboxes = document.querySelectorAll('.category-checkbox');
let categoriasSeleccionadas = [];
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', event => {
        let categoriaSeleccionada = event.target.dataset.category;
        if (event.target.checked) {
            categoriasSeleccionadas.push(categoriaSeleccionada);
        } else {
            let index = categoriasSeleccionadas.indexOf(categoriaSeleccionada);
            if (index > -1) {
                categoriasSeleccionadas.splice(index, 1);
            }
        }

        let eventosFiltrados = categoriasSeleccionadas.length > 0 ? eventosOriginales.filter(evento => categoriasSeleccionadas.includes(evento.category)) : eventosOriginales;
        eventosMostrados = eventosFiltrados;
        actualizarEventos();
    });
});

// BUSQUEDA //

let inputSearch = document.querySelector('input[type=search]');

function filtrarEventosPorBusqueda(event) {
    const searchValue = inputSearch.value.toLowerCase();
    const eventosFiltrados = eventosOriginales.filter(event =>
    event.name.toLowerCase().includes(searchValue) ||
    event.description.toLowerCase().includes(searchValue) ||
    event.category.toLowerCase().includes(searchValue)
    );
    eventosMostrados = eventosFiltrados;
    actualizarEventos();
    if (eventosMostrados.length === 0) {
        alert('No se encontraron resultados, por favor intente modificar los filtros de busqueda');
}

}

inputSearch.addEventListener('keyup', filtrarEventosPorBusqueda);

function actualizarEventos() {
    let cards = eventosMostrados.map(evento => crearCard(evento));
    let cardsHTML = cards.join('');

    eventContainer.innerHTML = cardsHTML;
}

