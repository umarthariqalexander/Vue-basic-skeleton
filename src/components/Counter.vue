<template>
  <div v-if="showCounter" class="wrapper">
    <h3>I am Counter</h3>
    <div>{{ counter }}</div>
    <button @click="increaseCounter">Increment Counter</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: () => {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    }
  },
  props: { showCounter: Boolean }
}
</script>

<style scoped>
.wrapper {
  display: inline-block;
  padding: 10px;
  border: 2px solid red;
}
</style>
