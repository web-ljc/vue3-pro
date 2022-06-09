<template>
  <div class="fa-div">
    <div> 姓名：{{ job.name }} </div>
    <h2>当前点击点鼠标的坐标: x {{point.x}} y {{point.y}}</h2>
  </div>
</template>

<script>
import {h, ref, reactive} from 'vue'
import usePoint from '../../hooks/usePoint'

export default {
  name: 'Stu',
  setup() {
    let job = reactive({
      name: '张三',
    })
    
    let point = usePoint()

    return {
      job,
      point
    }
  },
}

/* 
  自定义hook函数
    - 本质是一个函数。把setup函数中使用的Composition API进行了封装
    - 类似于vue2中的mixin
    - 自定义hook的优势：复用代码，让setup中的逻辑更清晰易懂

*/
</script>
