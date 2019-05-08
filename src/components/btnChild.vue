<template>
  <div>
    <button @click="addVal">+</button>
    <button @click="delVal">-</button>
  </div>
</template>
<script>
export default{
  methods: {
    addVal () {
      this.$selfbus.$emit('add')
    },
    delVal () {
      this.$selfbus.$emit('reduce')
    }
  }
}
</script>
