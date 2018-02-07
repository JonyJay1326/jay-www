<template>
  <div class="kid">
    <div>儿子:我有{{childTotle}}元</div>
    <input type="text" v-model="moneyToGive">
    <button @click="doGive">给爸爸</button>
    <div>爸爸有：{{fatherTotle}}元</div>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapMutations } from 'vuex'
export default {
  name: "kid",
  props: {
    money: Number
  },
  data() {
    return {
      moneyToGive:0
    };
  },
  computed: {
    fatherTotle:function(){
      return +this.money
    },
    ...mapState({
      // fatherTotle: state => state.a.fatherTotle,
      childTotle: state => + state.a.childTotle
    })
  },
  methods: {
    ...mapMutations([
       'giveToFather'
     ]),
     doGive(){
       this.$store.commit('giveToFather',this.moneyToGive)
     }
  }
};
</script>
<style>
.kid {
  border: 1px solid red;
}
</style>

