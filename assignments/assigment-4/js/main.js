const wire = document.getElementById('wire-series');

const fetchContent = (fetchUrl) => {
    return fetch(fetchUrl).then(data => data.json());
};


const episodes = episodes => {
    episodes.forEach(item=> {
        console.log(item);
        lbreak = document.createElement("br");

        const imgEl = document.createElement('img');
        const summaryEl = document.createElement('div');
        const nameEl = document.createElement('div');

        summaryEl.innerHTML = item.summary; 
        nameEl.innerHTML = item.name;

        summaryEl.classList.add('sum');
        nameEl.classList.add('name');
        imgEl.classList.add('img');

        imgEl.setAttribute('src', item.image.medium);
        wire.append(nameEl,imgEl,summaryEl);
    });
};

const call = async () => {
    const response2 = await fetchContent('https://interactionlab.space/data/assignment-4-2.json');
    episodes(response2)
}

call();
