<template>
  <div id="zuopin">
      <h2>作品</h2>
      <Child ref="changeChild" ></Child>
      {{childs}}
      <SecChild v-if='flag' :flag.sync='flag'></SecChild>
      <thirdChild v-model = 'thirdVal'></thirdChild>
      thirdVal: {{thirdVal}}
      <div>{{btnInp}}</div>
      <btnChild></btnChild>
  </div>
</template>
<script>
import Child from '@/components/child'
import thirdChild from '@/components/thirdChild'
import btnChild from '@/components/btnChild'
let childs = {
  template: "<div @click='changeStatus'>我是局部组件:{{data}}</div>",
  data: function () {
    return {
      data: 2
    }
  },
  methods: {
    changeStatus: function () {
      // 子组件修改父组件的值
      this.$emit('update:flag', false)
    }
  }
}
export default{
  data () {
    return {
      flag: true,
      thirdVal: 3,
      childs: 'jj',
      btnInp: 0
    }
  },
  created () {
    // console.log(this);
  },
  mounted () {
    // 通过$refs 上的属性;
    this.$refs.changeChild.$on('changeChild', (res) => {
      // console.log(res) // kk
    })
    // 封装的$emit;$on;
    this.$selfbus.$on('changeChild', (res) => {
      this.childs = res
    })
    // 增加
    this.$selfbus.$on('add', () => {
      // console.log(this.btnInp);
      this.btnInp++
    })
    // 减少
    this.$selfbus.$on('reduce', () => {
      this.btnInp--
    })
  },
  methods: {
  },
  components: {
    // 全局组件
    Child,
    // 局部组件
    'SecChild': childs,
    thirdChild,
    btnChild
  }
}
</script>
<style>
#zuopin{
  width:100%;
  height: 100%;
  overflow: auto;
}
</style>
