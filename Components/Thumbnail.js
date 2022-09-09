function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50">
      <img
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-md">{result.overview}</p>
        <p className="flex items-center text-yellow-500 italic">
          Rating {Math.round(result.vote_average * 100) / 100}{" "}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
