<template>

  <div>
    <button @click="$emit('increaseBy', 10)">
      Increase By 1
    </button>
  </div>
  <br/>
  <div>
    <input
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
      />
    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'EventComposite',
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
  data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
