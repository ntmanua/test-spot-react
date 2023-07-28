const MovieList = ({ moviesData }) => {
    const showMovies = moviesData.map((movie) => {
        return (
            <article
                key={movie.id}
                className='flex bg-white transition hover:shadow-xl sm h-96'
            >
                <div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
                    <time
                        datetime={movie.release_date}
                        className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900'
                    >
                        <span>2022</span>
                        <span className='w-px flex-1 bg-gray-900/10'></span>
                        <span>Oct 10</span>
                    </time>
                </div>

                <div className='hidden sm:block sm:w-200 sm:basis-56'>
                    <img
                        alt={movie.title}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className='h-auto w-full object-cover'
                    />
                </div>

                <div className='flex flex-1 flex-col justify-between'>
                    <div className='border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6'>
                        <a href='#'>
                            <h3 className='font-bold uppercase text-gray-900 text-[25px]'>
                                {movie.title}
                            </h3>
                        </a>

                        <p className='mt-2 line-clamp-5 text-sm/relaxed text-gray-700 text-[20px]'>
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </article>
        );
    });
    return (
        <div class='bg-slate-800 p-4 grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-10'>
            {showMovies}
        </div>
    );
};

export default MovieList;
