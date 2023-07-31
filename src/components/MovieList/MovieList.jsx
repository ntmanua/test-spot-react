import affiche from '@/assets/affiche_defaut.svg';
const MovieList = ({ moviesData }) => {
    const showMovies = moviesData.map((movie, index) => {
        const year = movie.release_date.split('-')[0];
        const month = movie.release_date.split('-')[1];
        const day = movie.release_date.split('-')[2];

        return (
            <article
                key={movie.id}
                className={`flex bg-white border-2 transition-all delay-${
                    index + 1
                } duration-500 hover:shadow-xl sm h-96`}
            >
                <div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
                    <time
                        dateTime={movie.release_date}
                        className='flex items-center justify-between gap-4 text-xl font-bold uppercase text-gray-900'
                    >
                        <span>{year}</span>
                        <span className='w-px flex-1 bg-gray-900/10'></span>
                        <span>
                            {month} / {day}
                        </span>
                    </time>
                </div>

                <div className='hidden sm:block sm:w-200 sm:basis-56'>
                    <img
                        alt={movie.title}
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : { affiche }
                        }
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
        <div className='h-full w-full p-4 grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-10'>
            {showMovies}
        </div>
    );
};

export default MovieList;
