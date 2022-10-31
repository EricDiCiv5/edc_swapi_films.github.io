const filmsContainer = document.getElementById(`allFilms`);

const api_Url = "https://swapi.dev/api/films/";
const photo_Url = "https://starwars-visualguide.com/assets/img/films/";
let photo_id = 1;


/*----FUNCIÓ PER COMUNICAR AMB API I VEURE PELICULES----*/
const mostrar_Pelicules = () => {
    fetch(api_Url).then(response => response.json()).then( data => {
            data.results.forEach(pelicula => {
                let any = pelicula.release_date.split("-")[0];
                filmsContainer.innerHTML += `
                <article>
                    <h4>
                        ${pelicula.title}
                    </h4>
                    <section id="firstOne">
                        <figure>
                            <img src="${photo_Url}${photo_id}.jpg" alt="${pelicula.title}'s poster " />
                        </figure>
                        
                        <p>
                            ${pelicula.opening_crawl}
                        </p>
                    </section>
                    <section id="secondOne">
                        <div id="directorYear">
                            <p>
                                Director: ${pelicula.director}
                            </p>
                            <p>
                                Release Year: ${any}
                            </p>
                        </div>
                        <div id="stats">
                            <h5>In this movie appears:</h5>
                            <ul >
                                <li>
                                    ${pelicula.characters.length} characters
                                </li>
                                <li>
                                    ${pelicula.planets.length} planets
                                </li>
                                <li>
                                    ${pelicula.starships.length} spaceships
                                </li>
                                <li>
                                    ${pelicula.vehicles.length} vehicles
                                </li>
                                <li>
                                    ${pelicula.species.length} species
                                </li>
                            </ul>
                        </div>
                    </section>
                </article>
                `
                photo_id++;
            });
        }
    );
    
}

mostrar_Pelicules();

filmsContainer.addEventListener('DOMContentLoaded', mostrar_Pelicules);

const anar_Adalt = () => {
    window.moveTo(0, 0);
}

document.getElementById('elevator').addEventListener('click', anar_Adalt);

