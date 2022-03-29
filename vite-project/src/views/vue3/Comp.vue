<template>
  <div @click="onClick">
    {{ msg }}
  </div>
  <p>{{ name }}</p>
</template>

<script setup>
import { ref } from 'vue'
// 获取组件传值
defineProps({
  msg: String
})

const name = ref('lisi')

// 自组件向父组件传递
const emit2 = defineEmits(['myclick'])
const onClick = () => {
  emit2('myclick', '返回数据')
}
const handleClick = (val) => {
  console.info(val, '接收数据')
  name.value = 'zhangsan'
}
// 组件暴露属性
defineExpose({
  handleClick
})

fetch('/api/getUsers')
  .then((res) => res.json())
  .then((data) => {
    console.info(data, 88888)
  })
</script>

<style lang="less" scoped>

</style>