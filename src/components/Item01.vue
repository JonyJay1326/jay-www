<template>
  <div class="item01">
    <div>儿子:我有{{childTotle}}元</div>
    <div>爸爸有：{{fatherTotle}}元</div>
  </div>
</template>
<script type="text/javascript">
import { mapState} from 'vuex'
export default {
  name: "item01",
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      fatherTotle: state => +state.a.fatherTotle,
      childTotle: state => +state.a.childTotle
    })
  },
  methods: {
  }
};
</script>
<style>
</style>

