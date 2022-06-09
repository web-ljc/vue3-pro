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
import { ref, reactive, watch } from 'vue'

export default {
  name: 'Stu',
  watch: {
    // sum(newValue, oldValue) {
    //   console.log(newValue, oldValue);
    // }
    // sum: {
    //   immediate: true, // 立即监听
    //   deep: true, // 深度监听
    //   handler(newValue, oldValue) {
    //     console.log('sum值变了', newValue, oldValue);
    //   }
    // }
  },
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
    
    // 监视，
    // 1. ref定义的响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum变了', newValue, oldValue);
    // })

    // 2. 监听多个数据更新, newVlaue 和 oldVlaue 会以数组形式出现
    // watch([sum, num], (newValue, oldValue) => {
    //   console.log(newValue, oldValue); // [1, 99] [0, 100]
    // }, {immediate: true})

    /*
      3. 监听reactive所定义的数据全部属性
        a. 注意此处无法正确获取oldValue
        b. 强制开启了深度监视（deep配置无效）
    */
    // watch(obj, (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // }, {deep: false})

    // 4. 监视reactive所定义的一个响应式数据中的某个属性
    // watch(() => obj.name , (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // })

    // 5. 监视reactive所定义一个响应式数据中的某些属性
    // watch([() => obj.name, () => obj.age], (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // })

    // 6. 特殊情况
    watch(() => obj.job, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, {deep: true}) // 此处由于监视的是reactive定义的对象中的某个属性，所以配置deep有效

    //  7. 监听ref定义的对象数据
    let testObj = ref({
      name: 'test'
    })
    // watch(testObj.value, () => {}) // 监听 属性.value
    watch(testObj, () => {}, {deep: true}) // 使用 deep: true

    return {
      sum,
      num,
      obj
    }
  },
}

/* 
  watch(data, fn)
    - 监视属性，监视ref所定义的响应式数据

*/
</script>
