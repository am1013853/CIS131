<script>

export default {
    props: ["title", "poster", "year"],
    methods: {
        getUrl(filename) {
            // return new URL(`../assets/${filename}`, import.meta.url).href
            return `https://image.tmdb.org/t/p/w500${this.poster}`;
        }
    }
}

</script>
<template>
    <div class="card col" style="width: 18rem;">
        <img :src="getUrl(poster)" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">Year: {{year}}</p>
            
            
        </div>
    </div>
</template>

