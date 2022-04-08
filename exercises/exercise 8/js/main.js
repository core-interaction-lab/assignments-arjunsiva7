// const db = {
//     id: 'appxfJxfQb92yyKkg',
//     table: 'movies',
//     apiKey: 'keykxG25CNr82Rf9Y'
// };

const airtableUrl = `https://api.airtable.com/v0/appVvOsHOLrzipYpV/Table%201?maxRecords=10&view=Grid%20view&api_key=keyA0jnAuvBfcVUVl`

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

    const myObject={
        Name: 'charname',
        Photo: 'image',
    }

    // const myArray = ['movie', 348927, 'fdios'];
    // console.log(myObject.Name);

    //console.log(myArray[2]);


    // response.records.forEach(own function)

    const container=document.getElementById('video');

    response.records.forEach((charname) => {
        console.log(charname);
        if(charname.fields.Photo){
            console.log(charname.fields.Photo[0].url);
            const photoImg = document.createElement('img');
            // photoImg.src = charname.fields.Photo[0].url;
            photoImg.setAttribute('src', charname.fields.Photo[0].url);

            container.append(photoImg);

        if(charname.fields.description){
            const descriptionEl=document.createElement('p');
            descriptionEl.innerHTML = charname.fields.description;

            descriptionEl.classList.add('desc');
            container.append(descriptionEl);
        }
        }
    });

};

fetchMovies();