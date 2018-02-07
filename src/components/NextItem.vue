<template>
  <div class="parent">

  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import kid from "@/components/Kid.vue"
export default {
  name: "parent",
  data() {
    return {

    };
  },
  components: {kid},
  methods: {
     ...mapMutations([

     ]),
     doEarn(){

     }
  },
  computed:{
    ...mapState({

    })
  }
};
</script>
