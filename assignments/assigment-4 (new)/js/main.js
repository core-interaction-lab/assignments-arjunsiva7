const fetchContent = async () => {
    const response = await fetch('https://interactionlab.space/data/assignment-4-2.json').then(data => data.json());
    console.log(response);

    const wire = document.getElementById('wireContainer');
    // const moviesContainerTwo = document.getElementById('movies-container-two');

    response.records.forEach(data => {
        linebreak = document.createElement("br");
        lbreak = document.createElement("br");
        
        const articleEl = document.createElement('article');
        const articleElTwo = document.createElement('article');
        const airdateEl = document.createElement('div');
        const runtimeEl = document.createElement('div');
        const summaryEl = document.createElement('div');
        const averageEl = document.createElement('div');
        const nameEl = document.createElement('div');

        nameEl.classList.add('name');
        averageEl.classList.add('avg');
        summaryEl.classList.add('sum');
        runtimeEl.classList.add('run');
        airdateEl.classList.add('date');

        nameEl.innerHTML = data.fields.name; 
        averageEl.innerHTML = data.fields.average;
        summaryEl.innerHTML = data.fields.summary; 
        runtimeEl.innerHTML = data.fields.runtime; 
        airdateEl.innerHTML = data.fields.airdate; 

        const photoImg = document.createElement('img');
        photoImg.classList.add('image-styling');

        response.records.forEach((image) => {
            if(content.fields.image){
                photoImg.src = data.fields.image[0].url;

                articleElTwo.append(photoImg);
                photoImg.style.width = '200px';
            }
        });

        articleEl.append(linebreak,photoImg,nameEl,averageEl,runtimeEl,linebreak,linebreak,summaryEl);
        wireContainer.appendChild(articleEl); 
    });

};

fetchContent();
