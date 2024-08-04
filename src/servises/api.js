import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const Token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTcyNDA5OTZlMmQ1YTNiZGU3MGI2YWViM2Q3Y2VjZiIsIm5iZiI6MTcyMjc4OTEzMi40NzY1NTQsInN1YiI6IjY2YWY5NWYwMjZkOTljNGU2OTY1YzA4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fSwvIczkQ3ITcSnu91GhB1Nf8y0lqkEuFXwomFGGUQk";

const options = {
  headers: {
    Authorization: Token,
  },
};

export const fetchTrendsMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?language=en-US`,
    options
  );
  return response.data.results;
};

export const searchMovieByName = async (query) => {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1& `,
    options
  );
  return response.data.results;
};

export const movieDetailsById = async (id) => {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  return response.data;
};

export const fetchMoviReviews = async (id) => {
  const response = await axios.get(
    `/movie/${id}/reviews?language=en-US`,
    options
  );
  return response.data.results;
};

export const fetchMovieCast = async (id) => {
  const response = await axios.get(
    `/movie/${id}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};
