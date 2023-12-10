import React, { useEffect, useState } from "react";
import axios from "axios";
import Star from "../common/icons/Star";
import useDebounce from "../../hooks/useDebounce";
import LoadingSkeleton from "../loading/LoadingSkeleton";

// https://api.themoviedb.org/3/search/movie?api_key=fe9cd1d4aebcfca31ebd7455c7d0df4b&query=""
// https://image.tmdb.org/t/p/original
const MovieSearchApp = () => {
  const [movies, setMoives] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const queryDebounce = useDebounce(query, 500);

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=fe9cd1d4aebcfca31ebd7455c7d0df4b&query='${queryDebounce}'`
      );
      if (response.data.results) {
        setMoives(response.data.results);
        setLoading(false);
      }
    };

    fetchData();
  }, [queryDebounce]);

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-[30px]">
        <input
          type="text"
          className="w-full p-5 rounded-[8px] border-2 placeholder:text-[#7A7A7A] placeholder:text-[16px] placeholder:font-[600] border-purple-400 shadow[0px_0px_0px_3px_rgba(125, 106, 255, 0.20)]"
          placeholder="Search movie..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      {loading ? (
        <div className="grid grid-cols-3 gap-10">
          <MovieItemLoading />
          <MovieItemLoading />
          <MovieItemLoading />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {movies.length > 0 &&
            movies.map((movie) => <MoiveItem key={movie.id} data={movie} />)}
        </div>
      )}
    </div>
  );
};

const MovieItemLoading = () => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-xl">
      <div className="h-[297px] p-[10px]">
        <LoadingSkeleton width="100%" height="100%" radius="16pxs" />
      </div>
      <div className="p-[30px] flex flex-col gap-[16px]">
        <h3 className="text-[20px] font-[600] text-black">
          <LoadingSkeleton height="20px" />
        </h3>
        <p className="text-[#999] text-[16px] text-ellipsis font-[400] !leading-loose">
          <LoadingSkeleton height="10px" />
          <div className="h-1"></div>
          <LoadingSkeleton height="10px" />
          <div className="h-1"></div>
          <LoadingSkeleton height="10px" />
        </p>
        <div className="flex items-center gap-[9px]">
          <Star />
          <span className="text-[16px] text-black font-[600]">
            <LoadingSkeleton height="10px" width="50px" />
          </span>
        </div>
      </div>
    </div>
  );
};

const MoiveItem = ({ data }) => {
  const { title, overview, vote_average, poster_path } = data;
  const pathImage = "https://image.tmdb.org/t/p/original" + poster_path;

  return (
    <div className="bg-white p-3 rounded-2xl shadow-xl">
      <div className="h-[297px] p-[10px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={pathImage}
          alt=""
        />
      </div>
      <div className="p-[30px] flex flex-col gap-[16px]">
        <h3 className="text-[20px] font-[600] text-black">{title}</h3>
        <p className="text-[#999] text-[16px] text-ellipsis font-[400] !leading-loose">
          {overview}
        </p>
        <div className="flex items-center gap-[9px]">
          <Star />
          <span className="text-[16px] text-black font-[600]">
            {Number(vote_average).toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;
