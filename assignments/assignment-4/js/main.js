const fetchMovies = async () => {
    const response = await fetch("https://api.airtable.com/v0/apptnUxtmjLkLZ6j4/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    console.log(response);

    const moviesContainer = document.getElementById('movies-container');
    const moviesContainerTwo = document.getElementById('movies-container-two');


    response.records.forEach(movie => {
        linebreak = document.createElement("br");
        lbreak = document.createElement("br");
        
        const articleEl = document.createElement('article');
        const articleElTwo = document.createElement('article');
        const filmnameEl = document.createElement('div');
        const filmmakerEl = document.createElement('div');
        const yearEl = document.createElement('div');
        const countryEl = document.createElement('div');
        const descriptionEl = document.createElement('div'); 
        const genreEl = document.createElement('div');

        filmnameEl.classList.add('filmname');
        filmmakerEl.classList.add('filmmaker');
        yearEl.classList.add('year');
        descriptionEl.classList.add('disc');
        countryEl.classList.add('cont');
        genreEl.classList.add('genre');

        filmnameEl.innerHTML = movie.fields.filmname; 
        filmmakerEl.innerHTML = movie.fields.filmmaker; 
        yearEl.innerHTML = movie.fields.year; 
        countryEl.innerHTML = movie.fields.country;
        descriptionEl.innerHTML = movie.fields.description;
        genreEl.innerHTML = movie.fields.genre; 
    
        articleEl.append(filmnameEl,filmmakerEl,yearEl,countryEl,genreEl);
        articleElTwo.append(filmnameEl,lbreak,filmmakerEl,yearEl,countryEl,genreEl,lbreak);

        moviesContainerTwo.appendChild(articleElTwo);
        moviesContainer.appendChild(articleEl); 

        const photoImg = document.createElement('img');
        photoImg.classList.add('image-styling');

        response.records.forEach((image) => {
            console.log(image);
            if(movie.fields.image){
                photoImg.src = movie.fields.image[0].url;
                
                articleElTwo.append(photoImg);
                photoImg.style.width = '300px';
            }
        });

    });

};

fetchMovies();