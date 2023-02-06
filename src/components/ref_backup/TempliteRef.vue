<template>
  <ul>
    <li v-for="item in list" :key="item" ref="items">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TempliteRef',
  data(){
    return{
      list: [1, 2, 3]
    }
  },
  mounted() {
    //console.log('11: '+this.$refs.items, this.$refs.items.length)
  },
  created() {
    console.log(this.$refs.items, this.$refs.items.length)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
