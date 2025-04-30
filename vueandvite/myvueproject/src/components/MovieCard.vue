<template>
    <div class="card" style="width: 18rem;">
        <img :src="getURL(posterimage)" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">Year Released: {{ year }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["title", "year", "posterimage"],
        methods: {
            getURL(poster){
                return new URL(`../assets/${poster}`, import.meta.url).href
            }
        }
    }
</script>