const MovieList = ({ moviesData }) => {
    const showMovies = moviesData.map((movie) => {
        return (
            <article
                key={movie.id}
                className='w-5/6     overflow-hidden rounded-lg shadow transition hover:shadow-lg'
            >
                <img
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className='h-auto w-full object-cover'
                />

                <div className='bg-white p-4 sm:p-6'>
                    <time
                        dateTime={movie.release_date}
                        className='block text-xs text-gray-500'
                    >
                        {movie.release_date}
                    </time>

                    <a href='#'>
                        <h3 className='mt-0.5 text-lg text-gray-900'>
                            {movie.title}
                        </h3>
                    </a>

                    <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                        {movie.overview}
                    </p>
                </div>
            </article>
        );
    });
    return (
        <div class='p-4 grid grid-cols-1 gap-1 lg:grid-cols-4 lg:gap-1'>
            {showMovies}
        </div>
    );
};

export default MovieList;
