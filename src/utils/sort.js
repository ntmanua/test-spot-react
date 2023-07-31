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

export { sortByDate, sortByRating };
