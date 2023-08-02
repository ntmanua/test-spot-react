import affiche from '@/assets/affiche_defaut.svg';
const MovieList = ({ moviesData }) => {
    const showMovies = moviesData.map((movie) => {
        const year = movie.release_date.split('-')[0];
        const month = movie.release_date.split('-')[1];
        const day = movie.release_date.split('-')[2];

        return (
            <article
                key={movie.id}
                className='flex bg-white transition hover:shadow-xl border-2'
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
                    <div className='flex items-center justify-center p-2'>
                        <svg
                            className='w-4 h-4 text-yellow-300 mr-1'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 22 20'
                        >
                            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                        </svg>
                        <p className='ml-2 text-xl font-bold text-gray-900 dark:text-black'>
                            {movie.vote_average}
                        </p>
                        <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
                        <p className='text-xl font-medium text-gray-900 dark:text-black'>
                            {movie.vote_count} vote
                        </p>
                    </div>
                </div>

                <div className='flex flex-1 flex-col justify-between overflow-hidden'>
                    <div className='h-full border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6'>
                        <h3 className='font-bold uppercase text-gray-900 text-[25px]'>
                            {movie.title}
                        </h3>

                        <p className='mt-2 text-xs/relaxed line-clamp-6 text-gray-700'>
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </article>
        );
    });

    return (
        <div className='h-full w-full p-4 grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-5'>
            {showMovies}
        </div>
    );
};

export default MovieList;
