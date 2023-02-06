<template>
  손자에게 전하는 메시지: ㅣㅣㅣ{{myInjectionKey.aa}}
</template>

<script>
export default {
  name: 'ProvideGrandChild',
  inject:{
    injected: {
      from: ['myInjectionKey']
    }
  }
  ,data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
