<template>
    <div v-for="plant in plants" :key="plant.id">
        <PlantCard v-if="filterType === 'All' || plant.type === filterType" :plant="plant" />
    </div>
</template>

<script>
    import PlantCard from "../components/PlantCard.vue"
    export default{
        props:['plants', 'filterType'],
        components:{PlantCard}
    }
</script>