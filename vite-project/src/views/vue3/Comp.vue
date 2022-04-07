<template>
  <div @click="onClick">
    {{ msg }}
  </div>
  <p>{{ name }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import request from '@/utils/request'
// 获取组件传值
defineProps({
  msg: String
})
const { t } = useI18n()
const name = ref('子组件数据')

// 自组件向父组件传递
const emit2 = defineEmits(['myclick'])
const onClick = () => {
  emit2('myclick', t('vue.sendMessage'))
}
const handleClick = (val) => {
  console.info(val, '接收数据')
  name.value = '子组件数据变更'
}
// 组件暴露属性
defineExpose({
  handleClick
})

// try {
//   const users = await request('/api/getUsers')
//   console.info(users, 'request')
// } catch (error) {
//   console.info(error)
// }
// fetch('/api/getUsers')
//   .then((res) => res.json())
//   .then((data) => {
//     console.info(data, 88888)
//   })
</script>

<style lang="less" scoped>

</style>