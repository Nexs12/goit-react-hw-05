import { Suspense, useEffect, useRef, useState } from "react";
import { movieDetailsById } from "../../servises/api";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import Errors from "../../components/Error/Error";
import s from "./MovieDetailsPage.module.css";

const MoviDetailsPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/movies");

  useEffect(() => {
    const getInformationById = async () => {
      try {
        const movieInform = await movieDetailsById(movieId);

        setData(movieInform);
      } catch (error) {
        setError(error.message);
      }
    };
    getInformationById();
  }, [movieId]);

  if (!data) {
    return <h2>LOading ...</h2>;
  }

  return (
    <div className={s.wrapper}>
      <NavLink className={s.link} to={goBackRef.current}>
        Go Back...
      </NavLink>
      <img
        className={s.image}
        src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
      />

      <ul className={s.nav}>
        <li>
          <NavLink className={s.link} to="reviews">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="cast">
            Cast
          </NavLink>
        </li>
      </ul>
      <div>
        <h1>Title: {data.original_title}</h1>

        <p>
          Overview: <span>{data.overview}</span>
        </p>
      </div>
      {error && <Errors message={error} />}

      <Suspense fallback={<h2>loader</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviDetailsPage;
