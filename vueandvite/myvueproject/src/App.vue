<script>
// Importing default dont put curly braces, you can call it whatever you want
  import Nav from './components/Nav.vue'
  import MovieCard from './components/MovieCard.vue';

  export default {
    components: {
      Nav,
      MovieCard
    },
    data(){
      return {
        movies: [
          {
            id: 1,
            title: 'The Matrix',
            poster: 'matrix.jpg',
            year: 1999,
          },
          {
            id: 2,
            title: 'Stitch and Lilo',
            poster: 'liloandstitch.jpg',
            year: 1999,
          },
          // More Movies
        ]
      }
    }
  }
</script>

<template>
  <Nav/>
  <MovieCard v-for="movie in movies" :title="movie.title" :year="movie.year" :posterimage="movie.poster"></MovieCard>
  
</template>