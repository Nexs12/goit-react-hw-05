import { useEffect, useState } from "react";
import { fetchTrendsMovies } from "../../servises/api";
import Errors from "../../components/Error/Error";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchTrendsMovies();
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, [error]);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Trending today</h1>
      <MovieList movieList={movies} />

      {error && <Errors message={error} />}
    </div>
  );
};

export default HomePage;
