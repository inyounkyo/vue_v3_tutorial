<template>
{{message}}, {{propB}}, {{propC}}, {{propF}}, {{disabled}}
</template>

<script>
export default {
  name: 'HelloWVue',
  // props: {
  //   kknd: String,
  //   age: Number,
  // },
  // props: ['kknd', 'age', 'greetingMessage', 'title', 'commentIds', 'author'],
  props: {
    propB: [Number],
    propC: {
      type: Number,
      require: true
    },
    propF:{
      validator(value) {
        return ['성공', '성취', '사과'].includes(value)
      }
    },
    disabled: Boolean
  },
  data(){
    return {
      message: ' 안녕 Vue!'
    }
  },
  created() {
    //alert(typeof  this.propB)
  },
  mounted() {
    // alert(this.commentIds)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
