// CARDS // 

let eventContainer = document.getElementById('cardP');
let cardsHTML = "";

for (let event of data.events){
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (event.date < data.currentDate){
        cardsHTML += crearCard(event);
    }
}

eventContainer.innerHTML = cardsHTML;

// CHECKBOX //

let categoriasUL = document.getElementById('categorias');
let categorias = [...new Set(data.events.map(event => event.category))];
categorias.forEach((categoria) => {
    let inputHTML = crearInput(categoria);
    categoriasUL.innerHTML += inputHTML;
});

// EVENTO PARA FILTRAR CARDS CON CHECKBOX//

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

        eventosFiltrados = data.events.filter(evento => categoriasSeleccionadas.includes(evento.category));
        cards = eventosFiltrados.map(evento => crearCard(evento));
        cardsHTML = cards.join('');

        eventContainer.innerHTML = cardsHTML;
    });
});
