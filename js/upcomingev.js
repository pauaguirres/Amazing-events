
let eventContainer = document.getElementById('cardU');
let cardU = "";

for (let event of data.events){
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
if (event.date > data.currentDate){
    cardU += `
    <div class="card" style="width: 14rem;">
    <img src="${event.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p>$ ${event.price}</p>
        <a href="./Details.html" class="btn btn-primary">Ver más...</a>
    </div>
    </div>
`;
    eventContainer.innerHTML = cardU;

}
}

// LOGICA DE LOS CHECKBOXES // NO ME SALIO IMPORTAR FUNCIONES ASI QUE COPIPASTEE CREARIMPUT :P
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

const categoriasUL = document.getElementById('categorias');
const categorias = [...new Set(data.events.map(event => event.category))];
categorias.forEach((categoria) => {
    const inputHTML = crearInput(categoria);
    categoriasUL.innerHTML += inputHTML;
});

const categoriasSeleccionadas = [];
const checkboxes = document.querySelectorAll('.category-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', event => {
        const categoriaSeleccionada = event.target.dataset.category;
        if (event.target.checked) {
            categoriasSeleccionadas.push(categoriaSeleccionada);
        } else {
            const index = categoriasSeleccionadas.indexOf(categoriaSeleccionada);
            if (index > -1) {
                categoriasSeleccionadas.splice(index, 1);
            }
        }

const eventosFiltrados = data.events.filter(evento => categoriasSeleccionadas.includes(evento.category));
let cardsHTML = "";
eventosFiltrados.forEach(evento => {
    cardsHTML += `
            <div class="card" style="width: 14rem;">
                <img src="${evento.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                        <p>$ ${evento.price}</p>
                        <a href="./Details.html" class="btn btn-primary">Ver más...</a>
                </div>
            </div>
        `;
    });
    eventContainer.innerHTML = cardsHTML;
});
});



