<template>
  <div>
    <h2>텍스트 입력</h2>
    <input v-model="text">{{text}}
    <h2>체크박스</h2>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">체크됨: {{checked}}</label>
    <h2>멀티 체크박스</h2>
    <input type="checkbox" id="chulsoo" value="철수" v-model="checkedNames">
    <label for="chulsoo">철수</label>
    <input type="checkbox" id="yuri" value="유리" v-model="checkedNames">
    <label for="yuri">유리</label>
    <input type="checkbox" id="maenggu" value="맹구" v-model="checkedNames">
    <label for="maenggu">맹구</label>
    <br/>체크된 이름: {{checkedNames}}
    <h2>라디오</h2>
    <input type="radio" id="seoul" value="서울" v-model="picked">
    <label for="seoul">서울</label>
    <br>
    <input type="radio" id="busan" value="부산" v-model="picked">
    <label for="busan">부산</label>
    <br>
    고른 것:{{picked}}
    <h2>선택</h2>
    <select v-model="selected">
      <option disabled value="">하나를 선택해요</option>
      <option>가</option><option>나</option><option>다</option>
    </select> 선택함:{{selected}}
    <h2>복수 선택</h2>
    <select v-model="multiSelected" multiple style="width:100px">
      <option>무</option><option>궁</option><option>화</option>
    </select> 선택함:{{multiSelected}}



  </div>
</template>

<script>
export default {
  name: 'ForLoop',
  data(){
    return{
      text: '수정해보헤쇼',
      checked: true,
      checkedNames:['철수'],
      picked:'서울',
      selected:'나',
      multiSelected:['무']

    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
