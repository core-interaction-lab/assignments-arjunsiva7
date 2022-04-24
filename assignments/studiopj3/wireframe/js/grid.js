const slideContainer = document.getElementById('right-container');

const fetchGames = async () => {
    const response = await fetch("https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    // console.log(response);
    // https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl

    // const moviesContainerTwo = document.getElementById('movies-container-two');

    Array.from(document.querySelectorAll('.select-item-btn')).map(btn => {
        btn.addEventListener('click', evt => {
            const record = response.records[btn.dataset.itemIndex];
            console.log(record);

            lbreak = document.createElement("br");
            const itemContainer = document.createElement('div');
            const titleEl = document.createElement('h1');
            const nameEl = document.createElement('div');
            const descriptionEl = document.createElement('div');

            titleEl.innerHTML = record.fields.Game;
            nameEl.innerHTML = record.fields.Name;
            descriptionEl.innerHTML = record.fields.description;

            titleEl.classList.add('name');
            nameEl.classList.add('charname');
            descriptionEl.classList.add('des');


            slideContainer.innerHTML = '';
            slideContainer.append(itemContainer);

            const photoImg = document.createElement('img');
            photoImg.classList.add('image-styling');

            response.records.forEach((image) => {
                // console.log(image);
                if(record.fields.image){
                    photoImg.src = record.fields.image[0].url;

                    // itemContainer.append(photoImg);
                    photoImg.style.width = '200px';
                }
            });

            itemContainer.append(nameEl,lbreak,lbreak,photoImg,lbreak,lbreak,titleEl,lbreak,descriptionEl);

        })
    });

//     response.records.forEach(games => {
//         linebreak = document.createElement("br");
//         lbreak = document.createElement("br");
        
//         const articleEl = document.createElement('article');
//         const articleElTwo = document.createElement('article');
//         const NameEl = document.createElement('div');
//         const descriptionEl = document.createElement('div');
//         const GameEl = document.createElement('div');
//         const charstatEl = document.createElement('div');

//         NameEl.classList.add('name');
//         GameEl.classList.add('game');
//         descriptionEl.classList.add('disc');
//         charstatEl.classList.add('stat');

//         NameEl.innerHTML = games.fields.Name; 
//         descriptionEl.innerHTML = games.fields.description;
//         GameEl.innerHTML = games.fields.Game; 
//         charstatEl.innerHTML = games.fields.charstat; 

//         const photoImg = document.createElement('img');
//         photoImg.classList.add('image-styling');

//         response.records.forEach((image) => {
//             // console.log(image);
//             if(games.fields.image){
//                 photoImg.src = games.fields.image[0].url;

//                 articleElTwo.append(photoImg);
//                 photoImg.style.width = '200px';
//             }
//         });

//         articleEl.append(lbreak,photoImg,lbreak,lbreak,NameEl,GameEl,lbreak,lbreak,descriptionEl,charstatEl);
//         // articleElTwo.append(photoImg,lbreak);

//         moviesContainer.appendChild(articleEl); 
//         // gamesContainerTwo.appendChild(articleElTwo);

//     });

};

fetchGames();
