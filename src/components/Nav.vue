<template>
  <div class="main-container">
  <banner></banner>
  <div>{{msg}}</div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
export default {
  name: "nav",
  data() {
    return {
      msg: "hello"
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
