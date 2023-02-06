<template>
  <p>
    <span :title="message">
       동적으로 바인딩된 나의 title을 보려면 몇 초 동안 마우스를 올려놓으세요!
    </span>
  </p>
  <p :class="{red: isRed}" @click="toggleRed">
    이것은 빨간색이어야 합니다... 하지만 전환하려면 저를 클릭하세요.
  </p>
  <p :style="{color}" @click="toggleColor">
    이것은 녹색이어야 하며, 클릭 시 녹색과 파란색 사이를 전환합니다.
  </p>

</template>

<script>
export default {
  name: 'PropertyBind',
  data(){
    return{
      message: ' 안녕 Vue!',
      isRed: true,
      color: 'green'
    }
  },
  methods:{
    toggleRed(){
      this.isRed = !this.isRed
    },
    toggleColor(){
      this.color = this.color === 'green' ? 'blue' : 'green'
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .red{
    color:red;
  }

</style>
