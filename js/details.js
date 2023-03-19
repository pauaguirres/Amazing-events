getData().then(data => {
    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let id = params.get('id');
    let event = data.events.find(event => event._id == id);
    if (event) {
    document.querySelector('main').innerHTML = crearCardDetails(event);
    } else {
    console.error('Event not found');
    }
}).catch(error => {
    console.error(error);
});
