<template>

  <p>
    예/아니오 질문:
    <input v-model="question" />
  </p>
  <p>{{answer}}</p>

</template>

<script>
export default {
  name: 'WathchAdd',

  data(){
    return {
      question: '',
      answer: '질문에는 일반적으로 물음표가 포함됩니다.'
    }
  },
  watch:{
    question(newQuestion, oldQuestion){
      console.log(newQuestion, oldQuestion)
      if(newQuestion.indexOf('?') > -1){
        this.getAnswer()
      }
    }
  },
  methods:{
    async getAnswer(){
      this.answer = '생각중....'
      try{
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오'
      }catch (e) {
        this.answer = '에러 api 연결실패' + e
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
