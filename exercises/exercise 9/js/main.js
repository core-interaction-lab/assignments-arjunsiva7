const fetchMovies = async () => {
    const response = await fetch("https://api.airtable.com/v0/apptnUxtmjLkLZ6j4/Table%201?maxRecords=10&api_key=keyA0jnAuvBfcVUVl").then(data => data.json()); 
    console.log(response);
    buildSlideshow(response.records);
    return response.records;
};



fetchMovies();