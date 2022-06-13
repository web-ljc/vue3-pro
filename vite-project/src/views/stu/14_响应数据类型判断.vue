<template>
  <div class="fa-div">
    <div> {{ name }} {{ price }} </div>
  </div>
</template>
 
<script>
import { ref, toRefs, reactive, isRef, isReactive, isReadonly, isProxy, } from 'vue'

export default {
  name: 'Stu',
  setup() {
    let car = reactive({
      name: 'car',
      price: '20w'
    })

    console.log(isRef(car)); // false
    console.log(isReactive(car)); // true
    console.log(isReadonly(car)); // false
    console.log(isProxy(car)); // true

    return {
      ...toRefs(car)
    }
  },
}

/* 
  其它 Composition API
    - 响应式数据的判断
    1. isRef 检查一个值是否为一个ref对象
    2. isReative 检查一个对象是否由 reactive 创建的响应式代理
    3. isReadonly 检查一个对象是否由 readonly 创建的只读代理
    4. isProxy 检查一个对象是否由 reactive 或 readonly 方法创建的代理

*/
</script>
