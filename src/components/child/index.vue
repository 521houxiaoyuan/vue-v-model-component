<template>
  <div>
    <p @click="changeVal">child</p>
  </div>
</template>
<script>
export default{
  methods: {
    changeVal () {
      // 子组件的$emit();
      // this.$emit('changeChild', 'kk')
      this.$selfbus.$emit('changeChild', 'kkk')
    }
  }
}
</script>
