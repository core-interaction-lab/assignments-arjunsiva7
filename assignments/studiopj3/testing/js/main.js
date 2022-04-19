const fetchGames = async () => {
    const response = await fetch("https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    // console.log(response);

    // https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl

    const moviesContainer = document.getElementById('movies-container');
    // const moviesContainerTwo = document.getElementById('movies-container-two');

    response.records.forEach(games => {
        linebreak = document.createElement("br");
        lbreak = document.createElement("br");
        
        const articleEl = document.createElement('article');
        const articleElTwo = document.createElement('article');
        const NameEl = document.createElement('div');
        const descriptionEl = document.createElement('div');
        const GameEl = document.createElement('div');
        const charstatEl = document.createElement('div');


        NameEl.classList.add('name');
        GameEl.classList.add('game');
        descriptionEl.classList.add('disc');
        charstatEl.classList.add('stat');

        NameEl.innerHTML = games.fields.Name; 
        descriptionEl.innerHTML = games.fields.description;
        GameEl.innerHTML = games.fields.Game; 
        charstatEl.innerHTML = games.fields.charstat; 

        const photoImg = document.createElement('img');
        photoImg.classList.add('image-styling');

        response.records.forEach((image) => {
            // console.log(image);
            if(games.fields.image){
                photoImg.src = games.fields.image[0].url;

                articleElTwo.append(photoImg);
                photoImg.style.width = '200px';
            }
        });

        articleEl.append(linebreak,photoImg,NameEl,GameEl,linebreak,linebreak,descriptionEl,linebreak,linebreak,charstatEl);
        // articleElTwo.append(photoImg,lbreak);

        gamesContainer.appendChild(articleEl); 
        // gamesContainerTwo.appendChild(articleElTwo);

    });

};

fetchGames();

// $('.flipcard').click(function (e) {
//     var $card = $(this);
//     if ($card.hasClass("flipped")) {
//         $card.removeClass('flipped');
//     } else {
//         $card.addClass('flipped');
//     }
// });