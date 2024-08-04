import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../servises/api";
import Grid from "../Grid/Grid";
import GridItem from "../Griditem/Griditem";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      <h2>cast</h2>
      <Grid>
        {cast.map((person) => {
          if (!person.profile_path) return;

          return (
            <GridItem key={person.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
              />
              <h2>{person.name}</h2>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default MovieCast;
