<article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
    <img
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className='h-56 w-full object-cover'
    />

    <div className='bg-white p-4 sm:p-6'>
        <time datetime='2022-10-10' className='block text-xs text-gray-500'>
            {movie.release_date}
        </time>

        <a href='#'>
            <h3 className='mt-0.5 text-lg text-gray-900'>{movie.title}</h3>
        </a>

        <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
            {movie.overview}
        </p>
    </div>
</article>;
