<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="b in boards" :key=b.id>
          <pre>{{b}}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {board} from '../api'

export default {
  data() {
    return {
      loading: false,
      boards: '',
      error: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      board.fetch()
        .then(data => {
          this.boards = data
        })
        .finally(_=> { // fanally는 충족, 거부 여부관계없이 실행되며, promise 반환
          this.loading = false
        })
    }
  }
}
</script>

<style>
</style>
