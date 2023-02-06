<template>
  <div>
    User {{ $route.params.username }} with post - table {{ $route.params.postId }}
<!--    {{this.iphoneObj}}-->
    <tr v-for="(value, key, index) in iphoneObj" :key="index">

      <td>key: {{key}}</td>
      <td>value:
        <span v-if="key == 'images'" >
          <span v-for="url in value" :key="url">
            <img :src="url" >
          </span>
        </span>
        <span v-else>{{value}}</span>
      </td>
    </tr>
  </div>
</template>
<script>

  export default {
    name: 'TableTest',

    data() {
      return {
        iphoneObj: null
      }
    },

    created() {
      fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => this.iphoneObj = json)
        .then(() => console.log(this.iphoneObj))

    },
    mounted() {

    },
    watch:{
    },
    methods:{
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width: 100px;
    height: 100px;
  }
  table, th, td {
    border: 1px solid black;
  }
  a {
    text-decoration: none;
    color: #42b883;
  }
  li {
    line-height: 1.5em;
    margin-bottom: 20px;
  }
  .author,
  .date {
    font-weight: bold;
  }

</style>