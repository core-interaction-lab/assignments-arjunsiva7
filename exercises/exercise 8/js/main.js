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

    const myArray = ['movie', 348927, 'fdios'];

    console.log(myObject.Name);

    // response.records.forEach(own function)

    response.records.forEach((charname) => {
        console.log(charname);
    });

};

fetchMovies();