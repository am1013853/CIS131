<script>
import Nav from './components/Nav.vue'
export default {
  components: { 
    Nav 
  },
  data(){
    return {
      plants: [
        { id: 1, name: "Snake Plant", type: "Indoor", inStock: true},
        { id: 2, name: "Rose", type: "Outdoor", inStock: false}
      ],
      // Add filterType
      filterType: 'All'
    }
  },
  methods: {
    handleFilter(type) {
      this.filterType = type;
      console.log(this.filterType);
    }
  }
}
</script>

<template>
  <div>
    <Nav @filter-plants="handleFilter"></Nav>
    <h1>Plant Store App</h1>
    <router-view :plants="plants" :filterType="filterType"/>
  </div>
</template>