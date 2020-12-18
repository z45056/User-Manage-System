<template>
  <div class="blackRose">
       <div class="head">
           <head_top></head_top>
      </div>
      Ionia
  </div>
</template>

<script>
import head_top from '../header/head-top';
export default {
  name: '',
  data () {
    return {}
  },
  components:{
      head_top
  },
  created () {},
  // mounted () {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.blackRose{
    width: 100%;
    height: 100vh;
    background-color: rgb(174, 165, 214);
}
</style>
