import axios from 'axios';

const fetchMovies = async (term) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?`,
            {
                params: {
                    api_key: '30bd5b107af7a883b3777693032f3fac',
                    query: term,
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

export default fetchMovies;
