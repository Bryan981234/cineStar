const getPeliculas = () => {
    const if= new URlSearchParams(window.location.search);('id')
    const data = await fetch(`https://www.oaemdl.es/cinestar_sweb_php/peliculas?id=${id}`);

    if (data.status == 200) {
        const peliculas = await data.json()
        let html = '<br/><h1>Nuestras Películas</h1><br/>'
        Peliculas.data.forEach(pelicula => {
            html+=



        });
        document.getElementById('contenido-interno').innerHTML = html
    }
}

getPeliculas()