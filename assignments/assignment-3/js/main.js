const fetchMovies = async () => {
    const response = await fetch("https://api.airtable.com/v0/apptnUxtmjLkLZ6j4/Table%201?api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    /*We need to do soemthing and we don't know how long it's going to take */
    /*Data is being stored in the constant called response*/
    /*async and await - wait until we have data from airtable before we continue and do something else*/
    /*We fetch the data and then execute whatever's after then*/
    /*Json-  standard for how various web api's will send and recieve data*/
    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    /*loop over and add it to the function*/
    response.records.forEach(movie => {
        console.log(movie.fields); /*for testing purposes*/
        const articleEl = document.createElement('article');
        const attachmentsEl = document.createElement('div');
        const filmmakerEl = document.createElement('div');
        const yearEl = document.createElement('div');
        const countryEl = document.createElement('div');
        const descriptionEl=document.createElement('div'); 


        filmnameEl.innerHTML = movie.fields.filmname; /*It has to match what's getting returned from airtable, in this case 'Title', dont use any spaces in field titles, use undescores*/
        // titleEl.innerHTML = movie.fields.Genre; 

        articleEl.appendChild(filmnameEl);
        // articleEl.appendChild(genreEl);

        moviesContainer.appendChild(articleEl);
        // moviesContainer.appendChild(articleEl);

    });
};

fetchMovies();