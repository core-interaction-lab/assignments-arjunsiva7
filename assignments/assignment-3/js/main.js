const fetchMovies = async () => {
    const response = await fetch("https://api.airtable.com/v0/apptnUxtmjLkLZ6j4/Table%201?maxRecords=10&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    /*We need to do soemthing and we don't know how long it's going to take */
    /*Data is being stored in the constant called response*/
    /*async and await - wait until we have data from airtable before we continue and do something else*/
    /*We fetch the data and then execute whatever's after then*/
    /*Json-  standard for how various web api's will send and recieve data*/
    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    response.records.forEach(movie => {
        linebreak = document.createElement("br");
        
        const articleEl = document.createElement('article');
        const filmnameEl = document.createElement('div');
        const filmmakerEl = document.createElement('div');
        const yearEl = document.createElement('div');
        const countryEl = document.createElement('div');
        const descriptionEl = document.createElement('div'); 
        const genreEl = document.createElement('div');
        const imageEl = document.createElement('div');

        var img = document.createElement("img");
        img.src = "https://dl.airtable.com/.attachmentThumbnails/b319a8b1370cfaf4892a896f683dff12/a0ba833e";
        // img.src = "https://api.airtable.com/v0/apptnUxtmjLkLZ6j4/Table%201?maxRecords=10&api_key=keyA0jnAuvBfcVUVl";
        img.style.width = '400px';

        var div = document.getElementById("movies-container");


        filmnameEl.innerHTML = movie.fields.filmname; /*It has to match what's getting returned from airtable, in this case 'Title', dont use any spaces in field titles, use undescores*/
        filmmakerEl.innerHTML = movie.fields.filmmaker; 
        yearEl.innerHTML = movie.fields.year; 
        countryEl.innerHTML = movie.fields.country;
        descriptionEl.innerHTML = movie.fields.description;
        genreEl.innerHTML = movie.fields.genre; 

        articleEl.append(linebreak,linebreak, img,filmnameEl,filmmakerEl,yearEl,countryEl,genreEl,linebreak,);

        moviesContainer.appendChild(articleEl); 
    });

    
};

fetchMovies();