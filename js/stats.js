getData().then(data =>{
    const table = document.querySelector('.table');
    const segundaFila = table.querySelectorAll('tr')[1];
    segundaFila.insertAdjacentHTML('afterend', crearTrEstadisticasEventos(data));

    const futureEventCategories = getFutureEventCategories(data);
    futureEventCategories.forEach(category => {
    const septimaFila = table.querySelectorAll('tr')[8];
    septimaFila.insertAdjacentHTML('afterend', crearTrEventosFuturos(category));
    });

    const lastTableRow = table.lastElementChild;
    getPastEventCategories(data).forEach(category => {
    lastTableRow.insertAdjacentHTML('afterend', crearTrEventosPasados(category));
    });

})