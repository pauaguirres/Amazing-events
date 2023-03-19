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
        <a href="./Details.html?id=${event.id}" class="btn btn-primary">Ver más...</a>
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

// function Details //

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
    return `
    <tr>
    <td>${eventosConMayorAsistencia(data.events)}</td>
    <td>${eventoConMenorAsistencia(data.events)}</td>
    <td>${calcularEventoMayorCapacidad(data)}</td>
    </tr>
    `
}

function eventosConMayorAsistencia(events) {
    let porcentajeMayor = 0;
    let eventosMayorAsistencia = [];
    events.forEach(event => {
    const porcentajeAsistencia = (event.assistance / event.capacity) * 100;
    if (porcentajeAsistencia > porcentajeMayor) {
        porcentajeMayor = porcentajeAsistencia;
        eventosMayorAsistencia = [event.name];
    } else if (porcentajeAsistencia === porcentajeMayor) {
        eventosMayorAsistencia.push(event.name);
    }
    });
    return eventosMayorAsistencia.join(', ');
}

function eventoConMenorAsistencia(events) {
    const eventoMenorAsistencia = events.reduce((eventoAnterior, eventoActual) => {
    const porcentajeAsistenciaActual = eventoActual.assistance / eventoActual.capacity * 100;
    const porcentajeAsistenciaAnterior = eventoAnterior.assistance / eventoAnterior.capacity * 100;
    return porcentajeAsistenciaActual < porcentajeAsistenciaAnterior ? eventoActual : eventoAnterior;
    });
    return eventoMenorAsistencia.name;
}

function calcularEventoMayorCapacidad(data) {
    let maximaCapacidad = 0;
    let eventoMayorCapacidad = null;
    for (const evento of data.events) {
    if (evento.capacity > maximaCapacidad) {
        maximaCapacidad = evento.capacity;
        eventoMayorCapacidad = evento.name;
}}
    return eventoMayorCapacidad;
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


