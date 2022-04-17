const fetchMovies = async () => {
    const response = await fetch("https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    console.log(response);


    // https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?api_key=keyA0jnAuvBfcVUVl
    const moviesContainer = document.getElementById('movies-container');
    const moviesContainerTwo = document.getElementById('movies-container-two');


    response.records.forEach(movie => {
        linebreak = document.createElement("br");
        lbreak = document.createElement("br");
        
        const articleEl = document.createElement('article');
        const articleElTwo = document.createElement('article');
        const NameEl = document.createElement('div');
        const descriptionEl = document.createElement('div');
        const GameEl = document.createElement('div');

        NameEl.classList.add('name');
        GameEl.classList.add('game');
        descriptionEl.classList.add('disc');

        NameEl.innerHTML = movie.fields.Name; 
        descriptionEl.innerHTML = movie.fields.description;
        GameEl.innerHTML = movie.fields.Game; 

        articleEl.append(linebreak,NameEl,descriptionEl,GameEl,linebreak,linebreak,);
        articleElTwo.append(filmnameEl,lbreak,filmmakerEl,yearEl,countryEl,genreEl,lbreak);

        // moviesContainerTwo.appendChild(articleElTwo);
        // moviesContainer.appendChild(articleEl); 

        // const photoImg = document.createElement('img');
        // photoImg.classList.add('image-styling');

        // response.records.forEach((image) => {
        //     console.log(image);
        //     if(movie.fields.Photo){
        //         photoImg.src = movie.fields.Photo[0].url;
                
        //         // articleElTwo.append(photoImg);
        //         photoImg.style.width = '400px';
        //     }
        // });

    });

};

fetchMovies();