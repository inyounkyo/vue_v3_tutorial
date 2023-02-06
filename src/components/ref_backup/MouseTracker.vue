<template>
  <slot :x="x" :y="y" />
</template>

<script>
export default {
  name: 'MouseTracker',

  data(){
    return {
      message: ' 안녕 Vue!',
      x: 0,
      y: 0
    }
  },
  methods:{
    update(e) {
      this.x = e.pageX
      this.y = e.pageY
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.update)
  },
  unmounted() {
    window.removeEventListener('mousemove', this.update)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
