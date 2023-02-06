<template>

 <div class="container">
   <header>
     <slot name="header" message="헤더"></slot>
   </header>
   <main>
     <slot></slot>
   </main>
   <footer>
     <slot name="footer"></slot>
   </footer>
 </div>

</template>

<script>
export default {
  name: 'SlotTest',

  data(){
    return {
      message: ' 안녕 Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fancy-btn {
    color: #fff;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
