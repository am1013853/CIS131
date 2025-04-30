<script>
export default {
    data() {
        return {
            searchName: ''
        }
    },
    methods: {
        search() {
            this.$emit('search-pet', this.searchName);
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/">Home</router-link> | 
        <router-link to="/pets">View Pets</router-link>
        <div>
            <input v-model="searchName" class="form-control mr-sm-2" type="text" placeholder="Enter pet name"/>
            <button class="btn btn-outline-success my-2 my-sm-0" @click="search">Search</button>
        </div>
    </nav>
</template>