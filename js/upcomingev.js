// CARDS // 
let eventContainer = document.getElementById('cardU');
let cards = '';

for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (event.date > data.currentDate) {
        cards += crearCard(event);
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

let categoriasSeleccionadas = [];
let checkboxes = document.querySelectorAll('.category-checkbox');
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

        let eventosFiltrados = data.events.filter(evento => categoriasSeleccionadas.includes(evento.category));
        let cards = eventosFiltrados.map(evento => crearCard(evento));
        let cardsHTML = cards.join('');

        eventContainer.innerHTML = cardsHTML;
    });
});



