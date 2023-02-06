<template>

  <ProvideGrandChild />
</template>

<script>
  import ProvideGrandChild from "@/components/ref_backup/ProvideGrandChild";

export default {
  name: 'ProvideChild',
  components:{
    ProvideGrandChild
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
