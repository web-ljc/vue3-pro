<template>
  <div class="fa-div">
    <div> {{ name }} {{ price }} </div>
  </div>
</template>
 
<script>
import { ref, toRefs, reactive, provide, } from 'vue'

export default {
  name: 'Stu',
  setup() {
    let car = reactive({
      name: 'car',
      price: '20w'
    })

    provide('car', car) // 给后代组件传递数据

    return {
      ...toRefs(car)
    }
  },
}

/* 
  其它 Composition API
    1. provide(name, obj)
      - 作用：向后代传递数据
    2. inject(name)
      - 作用：接收上级传递的数据

*/
</script>
