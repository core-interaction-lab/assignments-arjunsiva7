const airtableUrl = `https://api.airtable.com/v0/apptnUxtmjLkLZ6j4/Table%201?maxRecords=100&api_key=keyA0jnAuvBfcVUVl`;

const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    // console.log(response);
    buildSlideshow(response.records);
    return response.records;
};

const buildSlideshow = (movies) => {
    let leftI = 0;
    let rightI = 100;

    const articles = movies.slice(0, 101).map(buildSlide);
    slideshowContainer.append(articles);

    prevButton.addEventListener('click', () => {
        leftI += 1;
        rightI += 1;
        if (rightI >= movies.length) {
            rightI = 0;
        }
        if (leftI >= movies.length) {
            leftI = 0;
        }
        slideshowContainer.removeChild(slideshowContainer.children[0]);
        slideshowContainer.append(buildSlide(movies[rightI]));
    });

    nextButton.addEventListener('click', () => {
        leftI -= 1;
        rightI -= 1;
        if (leftI < 0) {
            leftI = movies.length - 1;
        }
        if (rightI < 0) {
            rightI = movies.length - 1;
        }
        slideshowContainer.removeChild(slideshowContainer.querySelectorAll('article')[6]);
        slideshowContainer.prepend(buildSlide(movies[leftI]));
    });
};

const buildSlide = (movie) => {
    const movieContainer = document.createElement('article');
    if (movie.fields.image) {
        // console.log(movie.fields.image[0].url);
        const posterImg = document.createElement('img');
        posterImg.src = movie.fields.image[0].url;
        posterImg.classList.add('poster-img', 'dlkjfdl');
        posterImg.id = 'poster-img-id';
        movieContainer.append(posterImg);
    }

    if (movie.fields.year) {
        // console.log(movie.fields.year);
    }

    if (movie.fields.description) {
        const descriptionEl = document.createElement('p');
        descriptionEl.innerHTML = movie.fields.description;
        descriptionEl.classList.add('movie-description');
        movieContainer.append(descriptionEl);
    }
    return movieContainer;
};

fetchMovies();