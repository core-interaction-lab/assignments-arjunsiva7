const fetchMovies = async () => {
    const response = await fetch("https://api.airtable.com/v0/appBMlngCvr2HLv1r/Table%201?maxRecords=6&view=Grid%20view&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    /*We need to do soemthing and we don't know how long it's going to take */
    /*Data is being stored in the constant called response*/
    /*async and await - wait until we have data from airtable before we continue and do something else*/
    /*We fetch the data and then execute whatever's after then*/
    /*Json-  standard for how various web api's will send and recieve data*/
    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    /*loop over and add it to the function*/
    /*runs the same functions for evryething under your list*/

    response.records.forEach(movie => {
        console.log(movie.fields); /*for testing purposes*/
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const imdbEl = document.createElement('a');
        const releaseDateEl = document.createElement('div');

        titleEl.innerHTML = movie.fields.Title; /*It has to match what's getting returned from airtable, in this case 'Title', dont use any spaces in field titles, use undescores*/
        genreEl.innerHTML = movie.fields.Genre; 

        imdbEl.href = movie.fields.imdb;
        imdbEl.target = "_blank";
        imdbEl.classList.add('imdb-link'); //you can add class like this to any field 

        imdbEl.innerHTML = "IMDB page";
        releaseDateEl.innerHTML = movie.fields.releaseDate;
        
        articleEl.append(titleEl, genreEl, releaseDateEl, imdbEl);
        // articleEl.appendChild(genreEl);

        moviesContainer.appendChild(articleEl);
        // moviesContainer.appendChild(articleEl);

    });

    const linkTags = document.querySelectorAll('.imdb-link');
    console.log(linkTags); 
    linkTags.forEach((link, index) =>{
        const linkColor = link.style.color;
        link.id = 'my-link-${index+1}';

        //index is number, furst time it runs numder is 0, and then it statrs incremeting 
        //takes multiple arguements, first few are strings 
        link.addEventListener('mouseover', (evt) =>{
            link.style.color = "green";
        });

        //what happens when you move away the mouse from the object
        link.addEventListener('mouseout', (evt) =>{
            link.style.color= linkColor;
        });
    });


};

fetchMovies();
