<script>
import Nav from "./components/Nav.vue"

export default {
  components:{
    Nav
  },
  data(){
    return {
      pets: [
        { id: 1, name: "Buddy", type: "Dog", age: 2, adopted: true},
        { id: 2, name: "Mittens", type: "Cat", age: 4, adopted: false},
        { id: 3, name: "Tweety", type: "Bird", age: 1, adopted: false},
        { id: 4, name: "Shadow", type: "Dog", age: 5, adopted: false}
      ],
      searchResult: ''
    }
  },
  methods: {
    handleSearch(name) {
      const pet = this.pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());
      if (pet) {
        this.searchResult = `${pet.name} is ${pet.adopted ? "adopted" : "available"}`;
      } else {
        this.searchResult = `No pet found by the name ${name}.`;
      }
    }
  }
}
</script>

<template>
  <div>
    <Nav @search-pet="handleSearch"/>
    <p>{{ searchResult }}</p>
    <router-view :pets="pets" />
  </div>
</template>
