import { NavLink, useLocation } from "react-router-dom";
import Grid from "../Grid/Grid";
import GridItem from "../Griditem/Griditem"
import s from "./MovieList.module.css";

const MovieList = ({ movieList = [] }) => {
  const location = useLocation();
  return (
    <div>
      <Grid>
        {movieList.map((movie) => {
          if (!movie.poster_path) return;
          return (
            <GridItem key={movie.id}>
              <NavLink
                className={s.link}
                to={`/movies/${movie.id}`}
                state={location}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                />
                <h4 className={s.name}>{movie.original_title}</h4>
              </NavLink>
              <p>{`Rate: ${movie.vote_average}`}</p>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default MovieList;
