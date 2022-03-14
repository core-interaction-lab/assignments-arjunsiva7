const fetchMovies = async () => {
    const response = await fetch("https://api.airtable.com/v0/appBMlngCvr2HLv1r/Table%201?maxRecords=6&view=Grid%20view&api_key=keyOmV7rE9G2SnPbz").then(data => data.json()); 
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
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const imdbEl = document.createElement('div');
        const releaseDateEl = document.createElement('div');


        titleEl.innerHTML = movie.fields.Title; /*It has to match what's getting returned from airtable, in this case 'Title', dont use any spaces in field titles, use undescores*/
        // titleEl.innerHTML = movie.fields.Genre; 

        articleEl.appendChild(titleEl);
        // articleEl.appendChild(genreEl);

        moviesContainer.appendChild(articleEl);
        // moviesContainer.appendChild(articleEl);

    });
};

fetchMovies();
