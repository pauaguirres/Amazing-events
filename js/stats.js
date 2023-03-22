getData().then(data =>{
    const table = document.querySelector('.table');
    const segundaFila = table.querySelectorAll('tr')[1];
    segundaFila.insertAdjacentHTML('afterend', crearTrEstadisticasEventos(data));

    const futureEventCategories = getFutureEventCategories(data);
    const futureEventsTableRows = mostrarEventos(data, getFutureEventCategories);
    const septimaFila = table.querySelectorAll('tr')[8];
    septimaFila.insertAdjacentHTML('afterend', futureEventsTableRows);

    const pastEventCategories = getPastEventCategories(data);
    const pastEventsTableRows = mostrarEventos(data, getPastEventCategories);
    const lastTableRow = table.lastElementChild;
    lastTableRow.insertAdjacentHTML('afterend', pastEventsTableRows);
})
