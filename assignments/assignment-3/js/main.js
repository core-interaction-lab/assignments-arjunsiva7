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

        // const myObject={
        //     image: 'image',
        // }
/*
            var img = document.createElement("img");
            img.src = "https://dl.airtable.com/.attachmentThumbnails/b319a8b1370cfaf4892a896f683dff12/a0ba833e";
            img.style.width = '600px';

            var div = document.getElementById("movies-container");
*/
        filmnameEl.innerHTML = movie.fields.filmname; /*It has to match what's getting returned from airtable, in this case 'Title', dont use any spaces in field titles, use undescores*/
        filmmakerEl.innerHTML = movie.fields.filmmaker; 
        yearEl.innerHTML = movie.fields.year; 
        countryEl.innerHTML = movie.fields.country;
        descriptionEl.innerHTML = movie.fields.description;
        genreEl.innerHTML = movie.fields.genre; 

        articleEl.append(linebreak,filmnameEl,filmmakerEl,countryEl,genreEl,linebreak,linebreak,);
        // articleElTwo.append(lbreak,lbreak,lbreak,lbreak,yearEl,);


        // moviesContainer.appendChild(articleEl); 
        moviesContainerTwo.appendChild(articleElTwo);


        const photoImg = document.createElement('img');
        photoImg.classList.add('image-styling');

        response.records.forEach((image) => {
            console.log(image);
            if(movie.fields.image){
                photoImg.src = movie.fields.image[0].url;
                
                articleElTwo.append(photoImg);
                photoImg.style.width = '375px';
            }
        });
    });

};

fetchMovies();