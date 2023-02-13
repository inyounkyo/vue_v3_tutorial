<template>
  <h1>
    use Router of LazyLoad.......ing
    {{user}}
  </h1>
</template>

<script>
export default {
  name: 'LazyLoad',

  data(){
    return {
      user:''
    }
  },
  mounted() {
    // fetch('http://localhost:8080/api/user/2')
    //     .then((response) => response.json())
    //     .then((data) => this.loadFn(data))
    //     .then((data) => this.user = data);

    this.postFn();
  },
  methods: {
    loadFn(data){
      console.log(typeof data);
      console.log('loadFn', data)
      console.log(`loadFn() ${data}`);
    },
    postFn(){
      fetch("http://localhost:8080/api/user/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Test",
          body: "I am testing!",
          userId: 1,
        }),
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>