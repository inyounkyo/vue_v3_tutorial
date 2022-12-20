<template>
  <button @click="show = !show">목록 전환</button>
  <button @click="list.push(list.length+1)">숫자 추가</button>
  <button @click="list.pop()">숫자 제거</button>
  <button @click="list.reverse()">숫자 뒤집기</button>

  <ul v-if="show && list.length">
    <li v-for="item of list" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'ForLoop',
  data(){
    return {
      show: true,
      list:[1, 2, 3]
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
