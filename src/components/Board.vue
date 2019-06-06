<template>
  <div>
    Board
  </div>
</template>

<script>
export default {
  data(){
    return {
      bid: 0
    }
  },
  created(){
    this.bid = this.$route.params.bid // this는 VueComponent 객체
  }
}
</script>

<style>

</style>
