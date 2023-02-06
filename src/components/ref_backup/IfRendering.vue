<template>

  <h1 v-if="awesome">Vue는 정말 멋지죠000000????</h1>
  <h1 v-else-if="awesome1">Vue는 정말 멋지죠111111????</h1>
  <h1 v-else>아닌가요?</h1>
  <template v-if="ok=true">
    <h1>제목</h1>
    <p>단락 1</p>
    <p>단락 2</p>
  </template>
  <h1 v-show="okk">안녕!!!!</h1>

  <button @click="awesome = !awesome">전환</button>
</template>

<script>
export default {
  name: 'IfRendering',
  data(){
    return{
      awesome: false,
      awesome1: true
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
