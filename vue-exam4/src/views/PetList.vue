<script>
import PetCard from '../components/PetCard.vue'

export default {
    components: { PetCard },
    props: ['pets']
}
</script>

<template>
    <div>
        <h2>Available Pets:</h2>
        <div v-for="pet in pets" :key="pet.id">
            <PetCard :pet="pet"/>
        </div>
    </div>
</template>