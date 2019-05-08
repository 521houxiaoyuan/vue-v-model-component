<template>
  <div>
    <input type="text" :value="value" @input="changeinp">
  </div>
</template>
<script>
export default{
  props: ['value'],
  data () {
    return {
      values: ''
    }
  },
  methods: {
    changeinp (event) {
      // 不能直接修改props传过来的值，职能传过value,赋值给data;
      this.values = event.target.value
      this.$emit('input', this.values)
    }
  }
}
</script>
