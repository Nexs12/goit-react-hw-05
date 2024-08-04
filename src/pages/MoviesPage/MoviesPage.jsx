import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { searchMovieByName } from "../../servises/api";
import Errors from "../../components/Error/Error";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [filtredMovi, setFiltredMovie] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
//   const location = useLocation();

  useEffect(() => {
    const searchMovie = async () => {
      try {
        const filtredMovie = await searchMovieByName(query);
        setFiltredMovie(filtredMovie);
      } catch (error) {
        setError(error.message);
      }
    };
    searchMovie();
  }, [query]);

  const handleSearch = (value) => {
    if (!value) return setSearchParams({});
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <MovieList movieList={filtredMovi} />
      {error && <Errors message={error} />}
    </div>
  );
};

export default MoviesPage;
