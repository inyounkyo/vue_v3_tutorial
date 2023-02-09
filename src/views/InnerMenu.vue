<template>
  <div class="container">
    <!-- 탭 메뉴 상단 시작 -->

    {{selectedComponent}}
    <ul class="tabs">
      <li class="tab-link" data-tab="tab-1" @click="selectedComponent = 'tabMenu1'">메뉴_하나</li>
      <li class="tab-link" data-tab="tab-2" @click="selectedComponent = 'tabMenu2'">메뉴_둘</li>
      <li class="tab-link" data-tab="tab-3" @click="selectedComponent = 'tabMenu3'">메뉴_셋</li>
    </ul>
    <keep-alive>
      <component v-bind:is="selectedComponent">
      </component>
    </keep-alive>


  </div>
</template>
<script>

  import tabMenu1 from "@/components/innerMenu/tabMenu1.vue";
  import tabMenu2 from "@/components/innerMenu/tabMenu2.vue";
  import tabMenu3 from "@/components/innerMenu/tabMenu3.vue";

  export default {
    name: 'InnerMenu',
    components: {
      tabMenu1, tabMenu2, tabMenu3
    },

    data() {
      return {
        selectedComponent: 'tabMenu1'
      }
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
  ul.tabs{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  ul.tabs li{
    display: inline-block;
    background: #898989;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
  }

  ul.tabs li.current{
    background: #e0e0e0;
    color: #222;
  }

  /*.tab-content{*/
  /*  display: none;*/
  /*  background: #e0e0e0;*/
  /*  padding: 12px;*/
  /*}*/

  /*.tab-content.current{*/
  /*  display: inherit;*/
  /*}*/
</style>