<template>
  <div class="fa-div">
    <div> 当前求和为：{{ sum }} </div>
    <div> 最大值为：{{ num }} </div>
    <el-button @click="sum++, num--">+1</el-button>
    <div>姓名: {{obj.name + obj.age}}</div>
    <el-button @click="obj.name = 'ls', obj.age = 20">改变姓名</el-button>
  </div>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue'

export default {
  name: 'Stu',
  setup() {
    let sum = ref(0)
    let num = ref(100)
    let obj = reactive({
      name: 'zs',
      age: 10,
      job: {
        work: 'web'
      }
    })
    
    // 监视
    watch(sum, () => {})
    
    watchEffect(() => {
      const t1 = sum.value
      console.log('watchEffect所制定的回调执行');
    })

    return {
      sum,
      num,
      obj
    }
  },
}

/* 
  watchEffect(fn)
    - watch的套路是：既要指明监视的属性，也要指明监视的回调
    - watchEffect：不用指明监视哪个属性，监视的回调中用到哪个属性，就监视哪个属性
    - watchEffect 和 computed：
      + computed注重的计算出来的值（回调函数的返回值），必须要写返回值
      + watchEffect更注重的是过程（回调函数的函数体），不用写返回值

*/
</script>
