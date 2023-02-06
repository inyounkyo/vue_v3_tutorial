<template>

  <ol>
<!--    <ListItem2 />-->
    <ListItem2
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
      ></ListItem2>


  </ol>
</template>



<script>

import ListItem2 from "@/components/ref_backup/ListItem2";


export default {
  name: 'ListItem1',
  components: {
    ListItem2
  },
  data(){
    return{
      groceryList:[
        { id: 0, text: '채소' },
        { id: 1, text: '치즈' },
        { id: 2, text: '인간이 먹을 수 있는 모든 것' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
