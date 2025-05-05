<script>
export default {
    props: ['plant']
}
</script>

<template>
    <div>
        <h3>{{ plant.name }}</h3>
        <p>Type: {{ plant.type }}</p>
        <p v-if="plant.inStock">In Stock</p>
        <p v-else>Out of Stock</p>
    </div>
</template>