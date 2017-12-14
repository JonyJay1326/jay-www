<template>
<div id="fullpage">
    <div class="section active" id="section0">
        <banner></banner>
    </div>
    <div class="section" id="section1">
        <div class="slide" id="slide1">
            <div class="intro">
                <h1>Around the world scrolling</h1>
                <p>Go to the first section and scroll up or to the last one and scroll down to see how it works.</p>
            </div>
        </div>
        <div class="slide active" id="slide2">
            <h1>Slide 2</h1>
        </div>
        <div class="slide" id="slide3">
            <h1>Slide 3</h1>
        </div>

    </div>
    <div class="section" id="section2">
        <div class="intro">
            <h1>Scroll Down</h1>
            <p>And it will animate down to the first section</p>
        </div>
    </div>
</div>

</template>

<script>
import Banner from '../components/Banner'
export default {
  name: "main-page",
  components: { Banner},
  data() {
    return {
      msg: "hello"
    };
  },
  mounted(){
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
