import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_MOVIEDB_API_URL,
  headers: {
    Authorization: import.meta.env.VITE_MOVIEDB_API_KEY,
  },
});

export default {
  getPopularMovies() {
    return apiClient.get("/movie/popular");
  },
  getUpcoming() {
    return apiClient.get("/movie/upcoming");
  },
  getTopRated() {
    return apiClient.get("/movie/top_rated");
  },
  getTVShows(){
    return apiClient.get("/tv/popular")
  }
};
