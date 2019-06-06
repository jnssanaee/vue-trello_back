<template>
  <div>
    Board
    <div v-if="loading">로딩중....</div>
    <div v-else>
      <div>bid: {{bid}}</div>
      <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
    </div>
    <hr>
    <router-view></router-view> <!-- 하위 컴포넌트(Card ) 랜더링 영역 -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      bid: 0,
      loading: false
    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    fetchData(){
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.bid = this.$route.params.bid // this는 VueComponent 객체
      }, 500)
    }
  }
}
</script>

<style>

</style>
