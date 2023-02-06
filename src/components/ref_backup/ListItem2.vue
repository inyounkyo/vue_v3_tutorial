<template>
  <li>{{ todo.text }}</li>
</template>

<script>

export default {
  name: 'ListItem2',
  props:{
    todo: Object
  }
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
