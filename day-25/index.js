import config from './config.js';



const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${config.TMDB_API_KEY}`,
    }
  };

  const getPopularMovies = async() => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular', options)
        const data = await res.json();
        const moviesData = data.results;
        console.log(data);
        console.log(moviesData);
        // Call the render function with the moviesData after fetching
        renderMovieCards(moviesData);
        
    } catch (error) {
        console.error("Something went wrong",error);
        
    };
  }
  getPopularMovies();

  const renderMovieCards = (movies) => {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = ''; // Clear previous content
    
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card'); // Add the movie-card class to the card element

        const title = document.createElement('h2');
        title.textContent = movie.title;
        title.classList.add('movie-title'); // Optionally, add a class for the title

        const overview = document.createElement('p');
        overview.textContent = movie.overview;
        overview.classList.add('movie-overview'); // Optionally, add a class for the overview

        const image = document.createElement('img');
        image.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
        image.alt = movie.title;
        image.classList.add('movie-image'); // Optionally, add a class for the image

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${movie.popularity}`; // Assuming the movie object has a 'rating' property
        rating.classList.add('movie-rating'); // Optionally, add a class for the rating

        const moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'More Info';
        moreInfoButton.classList.add('more-info-button');
        moreInfoButton.addEventListener('click', () => showMoreInfo(movie.id));

        card.appendChild(title);
        card.appendChild(overview);
        card.appendChild(image);
        card.appendChild(rating);
        card.appendChild(moreInfoButton);

        paginationContainer.appendChild(card);
    });
};





const fetchMovies = async (query) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}`,
      options
    );
    const data = await res.json();
    const moviesData = data.results;
    console.log(data);
    console.log(moviesData);
    renderMovieCards(moviesData);
  } catch (error) {
    console.error('Something went wrong', error);
  }
};

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    if(query) {
        fetchMovies(query);
    }
})

const showMoreInfo = async (movieId) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options);
        const movieDetails = await res.json();
        displayMovieDetails(movieDetails);
    } catch (error) {
        console.error('Something went wrong', error);
    }
};

const displayMovieDetails = (movieDetails) => {
    const modal = document.getElementById('movie-details-modal');
    modal.innerHTML = `
        <h2>${movieDetails.title}</h2>
        <p><strong>Relase Date:</strong> ${movieDetails.release_date}</p>
        <button id="close-modal">Close</button>
    `;
    modal.style.display = 'block';

    document.getElementById('close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
};



