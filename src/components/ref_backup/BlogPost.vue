<template>
  <div class="blog-post">
    <h4>{{title}}</h4>
    <button @click="$emit('enlarge-text')">텍스트 확대</button>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['title'],
  emits: ['enlarge-text']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
