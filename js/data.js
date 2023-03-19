async function getData() {
    const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
    const data = await response.json();
    return data;
}
getData();

// funcion card //

function crearCard(event){
    return `
    <div class="card" style="width: 14rem;">
    <img src="${event.image}" class="card-img-top" alt="imagen de ${event.name}">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p>$ ${event.price}</p>
        <a href="./Details.html?id=${event._id}" class="btn btn-primary">Ver más...</a>
    </div>
    </div>
`
};

// funcion input: //

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

// funcion Details //

function crearCardDetails(event){
    return `
    <div class="cards" id="cardD">
    <div class="card card-single">
        <img src="${event.image}" class="card-img-top" alt="imagen de ${event.name}">
        <div class="card-body">
            <h5 class="card-title">✨${event.name}✨</h5>
            <p class="card-text">${event.description}</p>
            <p>🌟</p>
        </div>
    </div>
    </div>`
}

// FUNCIONES PARA LA TABLA //
//ESTADISTICAS DE EVENTOS  //
function crearTrEstadisticasEventos(data){
    let trs = '';
    const eventosConMayorAsistencia = primerosCincoEventos(data.events, "assistance");
    const eventosConMenorAsistencia = primerosCincoEventos(data.events, "assistance", true);
    const eventosConMayorCapacidad = primerosCincoEventos(data.events, "capacity");
    for(let i=0; i<5; i++) {
        trs += `
        <tr>
        <td>${eventosConMayorAsistencia[i]}</td>
        <td>${eventosConMenorAsistencia[i]}</td>
        <td>${eventosConMayorCapacidad[i]}</td>
        </tr>
        `;
    }
    return trs;
}

function primerosCincoEventos(events, campo, ascendente=false) {
    const orden = ascendente ? 1 : -1;
    const eventosOrdenados = events.sort((a, b) => {
        return orden * ((b[campo] / b.capacity) - (a[campo] / a.capacity));
    });
    const primerosCincoEventos = eventosOrdenados.slice(0, 5);
    const nombresEventos = primerosCincoEventos.map(event => event.name);
    return nombresEventos;
}

function eventosConMayorAsistencia(events) {
    const eventosOrdenados = events.sort((a, b) => {
        return (b.assistance / b.capacity) - (a.assistance / a.capacity);
    });
    const primerosCincoEventos = eventosOrdenados.slice(0, 5);
    const nombresEventos = primerosCincoEventos.map(event => event.name);
    return nombresEventos.join(', ');
}

function eventosConMenorAsistencia(events) {
    const eventosOrdenados = events.sort((a, b) => {
        return (a.assistance / a.capacity) - (b.assistance / b.capacity);
    });
    const primerosCincoEventos = eventosOrdenados.slice(0, 5);
    const nombresEventos = primerosCincoEventos.map(event => event.name);
    return nombresEventos.join(', ');
}

function eventosConMayorCapacidad(events) {
    const eventosOrdenados = events.sort((a, b) => {
        return b.capacity - a.capacity;
    });
    const primerosCincoEventos = eventosOrdenados.slice(0, 5);
    const nombresEventos = primerosCincoEventos.map(event => event.name);
    return nombresEventos.join(', ');
}





// CATEGORIAS DE EVENTOS FUTUROS//
function crearTrEventosFuturos(category){
    return `
    <tr>
    <td>${category}</td>
    <td>$</td>
    <td>%</td>
    </tr>
`
}

//FUNCION QUE DEVUELVE LAS CATEGORIAS DE EVENTOS FUTUROS //
function getFutureEventCategories(data) {
    const currentDate = new Date(data.currentDate);
    const futureEvents = data.events.filter(event => new Date(event.date) > currentDate);
    const categories = futureEvents.map(event => event.category);
    return [...new Set(categories)];
}

// CATEGORIAS DE EVENTOS PASADOS //
function crearTrEventosPasados(category){
    return `
    <tr>
    <td>${category}</td>
    <td>$</td>
    <td>%</td>
    </tr>
`
}
//FUNCION QUE DEVUELVE LAS CATEGORIAS DE EVENTOS PASADOS //
function getPastEventCategories(data) {
    const currentDate = new Date(data.currentDate);
    const pastEvents = data.events.filter(event => new Date(event.date) < currentDate);
    const categories = pastEvents.map(event => event.category);
    return [...new Set(categories)];
}

