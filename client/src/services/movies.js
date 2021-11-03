import axios from "axios";

export const updateMovie = (movie) => {
  return axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
}