<template>

<!--  <EventComposite @increase-by="increaseCount" />-->
  <EventComposite @increase-by="(n) => count += n" />
  {{count}}

  <EventComposite
    v-model:first-name="firstName"
    v-model:last-name="lastName"
    />
  <h1>
    {{firstName}}:{{lastName}}
  </h1>

  <SlotTest>
    <template #header="headerProps">
      {{headerProps.message}}<h1>다음은 페이지 제목입니다.</h1>
    </template>
    <template #default>
      <p>주요 내용에 대한 단락입니다.</p>
      <p>기본 기 최고</p>
    </template>
    <template #footer>
      <p>다음은 연락처 정보입니다.</p>
    </template>
  </SlotTest>
  <MouseTracker v-slot="{x, y}">
    마우스 좌표: {{x}}, {{y}}
  </MouseTracker>
 <br/>

  <ProvideChild />
</template>

<script>
import {myInjectionKey} from "@/components/ref_backup/keys";
import EventComposite from "@/components/ref_backup/EventComposite";
import SlotTest from "@/components/ref_backup/SlotTest";
import MouseTracker from "@/components/ref_backup/MouseTracker";
import ProvideChild from "@/components/ref_backup/ProvideChild";

export default {
  name: 'App',
  components: {
    EventComposite, SlotTest, MouseTracker, ProvideChild
  },
  data() {
    return {
      count: 0,
      firstName: 'Jone',
      lastName: 'Doe',
      message:' 가즈아'
    }
  },
  provide(){
    return{
      [myInjectionKey]: {
        aa: 'aaaaaa',
        bb: 'bbbbbb',
      }
    }
  },
  computed: {
    msg(){
      return this.message +(1 + 1)
    }
  }

  ,
  methods: {
    increaseCount(n){
      this.count+=n
    },
    sum(){
      return 1+1
    }
  }

}
</script>

<style>

</style>
