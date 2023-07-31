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
        if (response.data) {
            return response.data.results;
        } else {
            // Handle the case where 'results' is not available in the response
            console.log("No 'results' found in the response.");
        }
    } catch (error) {
        // Handle the error if the request fails
        console.error('Error fetching data:', error);
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
            console.log(response.data.results[0].id);
            return response.data.results[0].id;
        } else {
            // Handle the case where 'results' is not available in the response
            console.log("No 'results' found in the response.");
        }
    } catch (error) {
        // Handle the error if the request fails
        console.error('Error fetching data:', error);
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
        if (response.data) {
            console.log(response.data.cast);
            return response.data.cast;
        } else {
            // Handle the case where 'results' is not available in the response
            console.log("No 'results' found in the response.");
        }
    } catch (error) {
        // Handle the error if the request fails
        console.error('Error fetching data:', error);
    }
};

export { fetchMovies, getActorId, fetchMoviesByActor };
