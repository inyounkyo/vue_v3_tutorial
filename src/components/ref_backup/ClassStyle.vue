<template>
  <div :class="{red: isActive}">SSSS</div>
  <div class="static"
       :class="{active: isActive, 'text-danger': hasError}">
    sdfsfsdf
  </div>
  <div :class="classObject">classObject</div>
  <div :class="classObject_1">classObject_computed</div>
  <div :class="[activeClass, errorClass]">배열로 바인딩 하기</div>
  <div :class="[isActive ? activeClass: '', errorClass]">삼항 표현식 하기</div>
  <div :class="[{ative: isActive}, errorClass]">배열에 오브젝트 하기</div>
  <div :style="{'font-size':fontSize + 'px', 'color': activeColor}">인라인 스타일</div>
  <div :style="styleObject">스타일 오브젝트</div>
  <div :stlye="[baseStyle, overridingStyles]">배열 객체</div>
  <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }">브라우저가 지원하는 값만 스타일 적용</div>
</template>

<script>
export default {
  name: 'ClassStyle',
  data(){
    return {
      isActive: true,
      hasError: false,
      classObject: {
        isActive: true,
        'text-danger': true
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
      styleObject:{
        color: 'pink',
        fontSize: '13px',
      }
    }
  },
  computed: {
    classObject_1() {
      return{
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .red{
   color: red;
 }
 .text-danger{
    color: blue;
 }
</style>
