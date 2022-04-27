const fetchGames = async () => {
    const response = await fetch("https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    console.log(response);

    const moviesContainer = document.getElementById('gamesContainer');

    response.records.forEach(games => {
        // Array.from(document.querySelectorAll('.select-item-btn')).map(btn => {
        //     btn.addEventListener('click', evt => {
        //         const record = response.records[btn.dataset.itemIndex];
                    linebreak = document.createElement("br");
                    lbreak = document.createElement("br");
                    line = document.createElement("hr");

                    const articleEl = document.createElement('article');
                    const articleElTwo = document.createElement('article');
                    const NameEl = document.createElement('div');


                    NameEl.classList.add('name');
                    NameEl.innerHTML = games.fields.Name; 

                    articleEl.append(NameEl,lbreak);
                    // articleElTwo.append(photoImg,lbreak);

                    gamesContainer.appendChild(articleEl); 
                    // gamesContainerTwo.appendChild(articleElTwo);

    });

};

fetchGames();
