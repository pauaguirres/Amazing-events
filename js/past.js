let eventContainer = document.getElementById('cardP');
let cardP = "";

for (let event of data.events){
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
if (event.date < data.currentDate){

    cardP += `
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
console.log (cardP)
    eventContainer.innerHTML = cardP;

}
}