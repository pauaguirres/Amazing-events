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

// funcion Tabla //

function crearTd (event){
    return `
    <tr>
        <td>
            Categories
        </td>
        <td>
        Revenues
        </td>
        <td>
        Percentage of attendance
        </td>
        </tr>
`
}