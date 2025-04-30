<script>
    export default{
        data() {
            return {
                message: 'Hello Vue 3 + Vite!'
            }
        }
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                        <router-link to="/" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#" @click.prevent="$emit('changeCategory', 'upcoming')">Upcoming</a> -->
                        <router-link to="/movies/upcoming" class="nav-link">Upcoming</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent="$emit('changeCategory', 'popular')">Popular</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent="$emit('changeCategory', 'top_rated')">Top Rated</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>