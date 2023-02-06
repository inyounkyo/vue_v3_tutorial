<template>
  <h1>
    {{message}}
  </h1>
  <button @click="reverseMessage">메시지 뒤집기</button>

  <button @click="message += '!'">! 추가하기</button>

  <a href="https:vuejs.org" @click.prevent="notify">e.preventDefault 작동하는 링크</a>
</template>

<script>
export default {
  name: 'UserInputHandle',

  data(){
    return {
      message: ' 안녕 Vue!'
    }
  },
  methods: {
    reverseMessage(){
      this.message = this.message.split('').reverse().join('')
    },
    notify(){
      alert('탐색이 금지되었습니다.')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button, a{
    display: block;
    margin-bottom: 1em;
  }
</style>
