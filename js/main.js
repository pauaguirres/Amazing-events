const eventContainer = document.getElementById('cardH');
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
const cardHTML = cards.join('');
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

// CHECKCBOX

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

actualizarEventos();

