let media = "tv";
let timeWindow = "week";
let apiKey = "7b1d579cd6ba8b41cc1f3f375e375cb5"
let url = `https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}`


fetch (url)
    .then(function (respuesta){
        return respuesta.json()
    })
    .then (function (data){

        let info = data.results 
        let series = document.querySelector('.top-series');


        for (let i=0; i<6; i++){
            series.innerHTML += 
                            ` <article class= "series">
                            <a href="detalleserie.html?id=${info[i].id}">
                                <div class="zoom">
                                <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="${info[i].title}" >
                        <h3>${info[i].title}</h3>
                            
                        </div>
                         </a>
                         </article>`
        }

    })
    .catch (function (error){
        console.log(error);
    })
