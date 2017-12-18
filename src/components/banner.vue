<template>
  <div id="imgBar">
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    $("#imgBar").slider({
      imgs: [
        "http://image.lovefay1994.com/banner/banner01.jpg",
        "http://image.lovefay1994.com/banner/banner02.jpg",
        "http://image.lovefay1994.com/banner/banner03.jpg",
      ],
      scale: 128 / 36,
      border: true,
      delay: 2200,
      x: 10,
      y: 3
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#imgBar {
  margin: 0 auto;
  width: 1280px;
}
</style>
