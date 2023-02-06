<template>

dd:: {{fullName}}

<p>
  <button value="" @:click="publishedBooksMessage1" >aa </button>
</p>
</template>

<script>



export default {
  name: 'ComputeAdd',
  data(){
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed:{
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 참고: 분해 할당 문법을 사용함.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  },
  methods:{
    publishedBooksMessage1(){
      this.fullName = 'aaaa bbbbb'
      //this.author.books = []
      //return alert(this.author.books.length > 0 ? 'yes' : 'no')
    }
  }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
