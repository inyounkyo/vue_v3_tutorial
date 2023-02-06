<template>

  <li v-for="item in items" :key="item">
    {{item.message}}
  </li>
  <li v-for="(item, index) in items" :key="index">
    {{parentMessage}} - {{index}} - {{item.message}}
  </li>
  <li v-for="(value, key, index) in myObject" :key="index">
    {{key}}: {{value}}: {{index}}
  </li>
  <span v-for="n in 10" :key="n">{{n}}&nbsp;</span>
  <ul>
    <template v-for="(item, index) in items" :key="index">
      <li>{{item.message}}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>
  <template v-for="todo in totos" :key="todo">
    <li v-if="!todo.isComplete">{{todo.name}}</li>
  </template>
  <span v-for="num in evenNumbers" :key="num"> {{num}}</span>

</template>

<script>
export default {
  name: 'ListRendering',
  data(){
    return{
      parentMessage: 'Parent',
      items: [{message: 'Foo'}, {message: 'Bar'}],
      myObject:{
        title: 'Vue에서 목록을 작성하는 방법',
        author: '홍길동',
        publishedAt: '2012-03-11'
      },
      numbers: [1, 2, 3, 4, 5]
    }
  },
  computed:{
    evenNumbers(){
      return this.numbers.filter(
        (n) => n % 2 === 0)
    }
  },
  created() {
    this.items.forEach((item, index) => {
      console.log(item.message, index)
    })
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
