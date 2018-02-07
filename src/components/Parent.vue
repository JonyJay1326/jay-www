<template>
  <div class="parent">
    <ul>
      <router-link :to="{name:'Item01'}"><li>item01</li></router-link>
      <router-link :to="{name:'Item02'}"><li>item02</li></router-link>
      <span>爸爸:我有{{fatherTotle}}元</span>
      <div>
        挣<input v-model="moneyToEarn">元
       <button @click="doEarn">打工</button></div>

      <kid :money="fatherTotle"></kid>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import kid from "@/components/Kid.vue"
export default {
  name: "parent",
  data() {
    return {
      moneyToEarn:0
    };
  },
  components: {kid},
  methods: {
     ...mapMutations([
       'earnMoney'
     ]),
     doEarn(){
       console.log(+this.moneyToEarn)
       this.$store.commit('earnMoney', +this.moneyToEarn)
     }
  },
  computed:{
    ...mapState({
      fatherTotle:state=>+state.a.fatherTotle
    })
  }
};
</script>
