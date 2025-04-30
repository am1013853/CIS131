<script>
export default {
    props: ['pet']
}
</script>

<template>
    <div class="card">
        <h3>{{ pet.name }}</h3>
        <p>Type: {{ pet.type }}</p>
        <p>Age: {{ pet.age }}</p>
        <p v-if="pet.adopted">Status: Adopted</p>
        <p v-else>Status: Available</p>
    </div>
</template>