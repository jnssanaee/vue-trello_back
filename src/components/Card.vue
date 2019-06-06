<template>
    <div>
        Card
        <div v-if="loading">로딩중....</div>
        <div v-else>cid: {{cid}}</div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      cid: 0,
      loading: false
    }
  },
  watch:{
    '$route': { // route가 변경되는지 주시하면서 변경되면 아래 실행 (params 변경사항에 반응한다.)
        handler: 'fetchData',
        immediate: true
        //this.cid = this.$route.params.cid
    }
  },
  methods: {
    fetchData(){
      this.loading = true
      setTimeout(()=>{
          this.cid = this.$route.params.cid
          this.loading = false
      }, 500)
    }
  }
}
</script>

<style>

</style>
 