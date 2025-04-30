<script>
import Nav from './components/Nav.vue'
import MovieCard from './components/MovieCard.vue'
import MovieService from './services/MovieService.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
export default {
  data() {
    return {
      message: 'Hello Vue 3 + Vite!'
    }
  },
  components: {
    Nav,
    MovieCard
  },
  data() {
    return {
      movies: [
        { title: 'Matrix', poster_path: 'topgun.jpeg', release_date: 2021 },
        { title: 'Top Gun', poster_path: 'matrix.jpeg', release_date: 2020 },

      ]
    }
  },
  mounted(){
      this.fetchMovies("popular")
    },
  methods:
  {
    
    
    fetchMovies(category) {
      let apiCall;

      switch (category) {
        case 'popular':
          apiCall = MovieService.getPopularMovies();
          break;
        case 'upcoming':
          apiCall = MovieService.getUpcoming();
          break;
        case 'top_rated':
          apiCall = MovieService.getTopRated();
          break;
        case 'tv':
          apiCall = MovieService.getTVShows()
        default:
          console.warn(`Unknown category: ${category}`);
          return;
      }

      apiCall.then((response) => {
        this.movies = response.data.results.map((movie) => {
          return {
            title: movie.title,
            poster: movie.poster_path,
            year: movie.release_date
          };
        }).slice(0,4)
      });
    }
  }
}
</script>

<template>
  <Nav @changeCategory="fetchMovies"></Nav>
  <div class="container row">
    <MovieCard  v-for="movie in movies" :key="movie.id" :title="movie.title" :poster="movie.poster"
      :year="movie.year"></MovieCard>

  </div>

</template>
