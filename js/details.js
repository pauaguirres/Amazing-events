getData().then(data =>{
let queryString = location.search;
let params = new URLSearchParams (queryString);
let id = params.get('id');
let event = data.events.find(event => event.id == id);
document.querySelector('main').innerHTML = crearCardDetails(event);
}
)