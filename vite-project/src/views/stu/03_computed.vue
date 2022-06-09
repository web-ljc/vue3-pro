<template>
  <div class="fa-div">
    <div> 姓名：{{ job.name }} </div>
    {{job.fullName}}
  </div>
</template>

<script>
import {h, ref, reactive, computed} from 'vue'

export default {
  name: 'Stu',
  setup() {
    let job = reactive({
      name: '张三',
      age: 122343424
    })
    // 计算属性-简写，没有考虑计算属性被修改的情况
    // job.fullName = computed(() => job.name + job.age)
    // 计算属性-完整写法（考虑读写）
    job.fullName = computed({
      get() {
        return job.name + job.age
      },
      set(value) {
        // 当value值变化时，可以处理
        return value
      }
    })
    return {
      job
    }
  },
}

/* 
  computed(fn)
    - 计算属性, 通过回调函数监听对象属性，返回新属性

*/
</script>
