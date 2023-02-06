<template>
  <button @click="greet">환영합니다11.</button>
  <button @click="(event)=>warn('ddd', event)">화살표 함수</button>
</template>

<script>
export default {
  name: 'EventHandler',
  data(){
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event){
      //alert(`안녕 ${this.name}`)
      alert(`안녕 `+this.name)
      if(event){
        alert(event.target.tagName)
      }
    },
    warn(message, event){
      event.preventDefault()
      alert(message)
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
