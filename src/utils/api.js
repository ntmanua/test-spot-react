import axios from 'axios';
const fetchMovies = async (term) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?`,
            {
                params: {
                    api_key: '30bd5b107af7a883b3777693032f3fac',
                    query: encodeURI(term),
                },
            }
        );
        if (response.data.results.length > 0) {
            return response.data.results;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw new Error("Une erreur s'est produite");
    }
};

const getActorId = async (term) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/person?`,
            {
                params: {
                    api_key: '30bd5b107af7a883b3777693032f3fac',
                    query: encodeURI(term),
                },
            }
        );
        if (response.data) {
            return response.data.results[0].id;
        } else {
            console.log("No 'results' found in the response.");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw new Error("Une erreur s'est produite");
    }
};
const fetchMoviesByActor = async (term) => {
    try {
        const actorId = await getActorId(term);
        const response = await axios.get(
            `https://api.themoviedb.org/3/person/${actorId}/movie_credits?`,
            {
                params: {
                    api_key: '30bd5b107af7a883b3777693032f3fac',
                },
            }
        );
        if (response.data.cast.length > 0) {
            return response.data.cast;
        } else {
            console.log("No 'results' found in the response.");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw new Error("Une erreur s'est produite");
    }
};

export { fetchMovies, getActorId, fetchMoviesByActor };
