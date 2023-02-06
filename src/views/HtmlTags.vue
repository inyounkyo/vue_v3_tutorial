<template>
  <div>
     html tag...{{ip_txt}} <br/>
     check's list..{{ch_list}}
     radio pick..{{rd_list}}
    <table>
      <colgroup>
        <col style="width: 20%">
        <col style="width: 20%">
        <col>
      </colgroup>
      <thead>
        <tr>
          <th>유형</th>
          <th>설명</th>
          <th>예제</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>button</td>
          <td> 버튼 </td>
          <td>
            <button id="" value="button" @click="kk_alert(12, this.ip_txt)">button</button>
          </td>
        </tr>
        <tr>
          <td>checkbox</td>
          <td> 체크 </td>
          <td>
            <input v-model="ch_list" type="checkbox" id="a" value="사과"><label for="a">사과</label>
            <input v-model="ch_list" type="checkbox" id="b" value="오렌지"><label for="b">오렌지</label>
            <input v-model="ch_list" type="checkbox" id="c" value="바나나"><label for="c">바나나</label>
            <input v-model="ch_list" type="checkbox" id="d" value="토마토"><label for="d">토마토</label>
          </td>
        </tr>
        <tr>
          <td>radio</td>
          <td> 라디오 </td>
          <td>
            <input type="radio" id="a1" name="number" v-model="rd_list" value="일본"><label for="a1">일본</label>
            <input type="radio" id="b1" name="number" v-model="rd_list" value="한국"><label for="b1">한국</label>
            <input type="radio" id="c1" name="number" v-model="rd_list" value="중국"><label for="c1">중국</label>
            <input type="radio" id="d1" name="number" v-model="rd_list" value="제주"><label for="d1">제주</label>
          </td>
        </tr>
        <tr>
          <td>select-box</td>
          <td>셀렉트 </td>
          <td>
            <select v-model="selected" @change="ip_chage($event)">
              <option :value="{name: 'LEE'}">LEE</option>
              <option :value="{name: 'Byung'}">Byung</option>
              <option :value="{name: 'Jun'}">Jun</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>input</td>
          <td>인풋 </td>
          <td>
            <input type="text" v-model="ip_txt">
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</template>
<script>

  export default {
    name: 'HtmlTags',

    data() {
      return {
        ip_txt:'',
        selected:'',
        ch_list:[],
        rd_list:''
      }
    },
    mounted() {
    },
    watch:{
    },
    methods:{
      kk_alert(a, txt){
        //alert('dddddddddddddddddd::_'+a +' '+  txt);
        alert(`sfsdf:${a}, ${txt}`)
      },
      ip_chage(){
        alert(this.selected['name']);
        //alert(e.target.value);
      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {

  }
  table {
    width: 100%;
    border: 1px solid #42b883;
    font-family: "Adobe 고딕 Std B";
  }
  th, td {
    border: 1px solid black;
  }

</style>