<template>
  <button @:click="count++" value="">당은은 {{count}}번 클릭했습니다.</button>
</template>

<script>
export default {
  name: 'ButtonCounter',

  data(){
    return {
      count:0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
