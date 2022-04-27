const slideContainer = document.getElementById('right-container');

const fetchGames = async () => {
    const response = await fetch("https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 

    Array.from(document.querySelectorAll('.select-item-btn')).map(btn => {
        btn.addEventListener('click', evt => {
            const record = response.records[btn.dataset.itemIndex];
            console.log(record);

            lbreak = document.createElement("br");
            linebreak = document.createElement("br");
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

            itemContainer.append(nameEl,linebreak,linebreak,lbreak,photoImg,lbreak,lbreak,titleEl,lbreak,descriptionEl);

        })
    });

};

fetchGames();
