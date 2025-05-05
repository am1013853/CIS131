<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/plants">View Plants</router-link>
        <!-- Add the Select Drop down -->
         <select @change="$emit('filter-plants', $event.target.value)">
            <option value="All">All</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
         </select>
    </nav>
</template>