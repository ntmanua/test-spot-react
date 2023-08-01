import MovieList from '../components/MovieList/MovieList';

const compareDates = (a, b) => {
    const dateA = Date.parse(a.release_date);
    const dateB = Date.parse(b.release_date);

    return dateB - dateA;
};
const sortByDate = (movies) => {
    movies.sort(compareDates);
};

const compareRatings = (a, b) => {
    const ratingA = a.vote_average;
    const ratingB = b.vote_average;

    return ratingB - ratingA;
};
const sortByRating = (movies) => {
    movies.sort(compareRatings);
};

const sortMovies = (movies, option) => {
    if (option === 'option1') {
        return sortByDate(movies);
    } else if (option === 'option2') {
        return sortByRating(movies);
    } else {
        return movies;
    }
};
export { sortMovies };
