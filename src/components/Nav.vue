<template>
  <div class="main-container">
    <div class="nav-container">
      <div v-for="navItem in navList" class="nav-item">
        <a :href="navItem.url">{{navItem.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      navList: [
        {
          name: "Home",
          url: "http://www.jonyjay.com"
        },
        {
          name: "Blog",
          url: "http://blog.jonyjay.com"
        },
        {
          name: "MusicDemo",
          url: "http://music.jonyjay.com"
        },
        {
          name: "GitHub",
          url: "https://github.com/JonyJay1326"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.nav-container {
  display: flex;

  .nav-item {
    float: 1px;
    padding: 20px;
  }
}
</style>
