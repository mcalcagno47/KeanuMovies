const spinnerList = document.getElementById("spinner-list");
const spinBtn = document.querySelector("#spinBtn");


spinBtn.addEventListener("click", () => {

    Clean();

    fetch('/api/movieRoutes/')
        .then(response => response.json())
        .then(data => {
            showMovies(data);
        })
})

function showMovies(data) {
    
    document.getElementById('spinner-list').innerHTML=''
    
    data.results.forEach(movie => {
            let { name, year, description, id } = movie;

            // let movieCard = document.createElement('div');
            let movieCard = document.createElement('div');
            let movieName = document.createElement('h2');
            let movieYear = document.createElement('p');
            let movieDescription = document.createElement('p');

            spinnerList.appendChild(movieCard);

            movieName.textContent = name;
            movieYear.textContent = year;
            movieDescription.textContent = description;
        })
}
