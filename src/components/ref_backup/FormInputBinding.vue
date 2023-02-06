<template>

  <input :value="text"
         @input="event => text = event.target.value">
  <input v-model="text">
  <p>메시지 {{message}}</p>
  <input v-model="message" placeholder="메시지 입력하기" />
  <textarea v-model="message" placeholder="여러 줄을 추가해보세요"></textarea>
  <br/>
  <input type="checkbox" id="chk" v-model="checked" />
  <label for="chk">{{checked}}</label>
  <br/>
  <div>
    체크된 이름: :{{checkedNames}}
  </div>
  <input type="checkbox" id="jack" value="jeck" v-model="checkedNames">
  <label for="jack">젝</label>
  <input type="checkbox" id="jack1" value="jeck1" v-model="checkedNames">
  <label for="jack1">젝1</label>
  <br/>
  <div>선택한 것: {{picked}}</div>
  <input type="radio" id="one" value="하나" v-model="picked" />
  <label for="one">하나</label>
  <input type="radio" id="two" value="두개" v-model="picked" />
  <label for="two">두개</label>
  <br/>
  <div>선택됨: {{selected}}</div>
  <select v-model="selected">
    <option disabled value="">선택</option>
    <option>가</option>
    <option>나</option>
    <option>다</option>
  </select>
  <br/>
  <select v-model="selected">
    <option v-for="option in options" :key="option.value">
      {{option.text}}
    </option>
  </select>
  <br/>
  선택: {{pick}}
  <input type="radio" v-model="pick" :value="first"/>
  <input type="radio" v-model="pick" :value="second"/>
  <br/>
  <select v-model="selected">
    <option :value="{number: 123}">123</option>
  </select>
  <br/>
  입력: {{msg}}
  <input v-model.trim="msg"/>
</template>

<script>
export default {
  name: 'HelloWVue',
  data() {
    return {
      message: '',
      checked: false,
      checkedNames: [],
      picked: true,
      selected: '1',
      options: [
        {text: '하나', value: '1'},
        {text: '둘', value: '2'},
        {text: '셋', value: '3'}
      ],
      pick: '12121',
      first: 'first',
      second: 'second',
      msg:null

    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
