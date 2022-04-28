const fetchGames = async () => {
    const response = await fetch("https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    console.log(response);

    const gamesContainer = document.getElementById('games-container');
    response.records.forEach(record => {
        linebreak = document.createElement("br");
        lbreak = document.createElement("br");
        
        const articleEl = document.createElement('article');
        const itemContainer = document.createElement('div');
        const titleEl = document.createElement('h1');
        const nameEl = document.createElement('div');
        // const descriptionEl = document.createElement('div');

        titleEl.innerHTML = record.fields.Game;
        nameEl.innerHTML = record.fields.Name;
        // descriptionEl.innerHTML = record.fields.description;

        titleEl.classList.add('name');
        nameEl.classList.add('charname');
        // descriptionEl.classList.add('des');

        const photoImg = document.createElement('img');
        photoImg.classList.add('image-styling');

        response.records.forEach((image) => {
            // console.log(image);
            if(record.fields.image){
                photoImg.src = record.fields.image[0].url;

                // gamesContainer.append(photoImg);
                photoImg.style.width = '200px';
            }
        });

        articleEl.append(nameEl,linebreak,titleEl,lbreak,photoImg,linebreak,linebreak,linebreak);
        gamesContainer.appendChild(articleEl); 

    });

};

fetchGames();