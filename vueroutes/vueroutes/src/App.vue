<script>
import Nav from "./components/Nav.vue"
  export default {
    components:{
      Nav
    }
  }
</script>

<template>
  <div>
    <Nav/>
    <router-view />
  </div>
</template>


