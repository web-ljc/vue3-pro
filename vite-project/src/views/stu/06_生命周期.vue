<template>
  <div class="fa-div">
    <div> 姓名：{{ job.name }} </div>
    <div> 工作：{{ job.type }} </div>
    <div> 薪水：{{ job.salary }} </div>
  </div>
</template>

<script>
import {h, ref, reactive, onBeforeMount, onMounted} from 'vue'

export default {
  name: 'Stu',
  setup() {
    let job = reactive({
      name: '张三',
      type: 'web',
      salary: '30k'
    })

    console.log('---setup---最开始');

    // 生命周期函数
    onBeforeMount(() => {
      console.log('传入回调函数');
    })
    onMounted(() => {})

    return {
      job,
    }
  },
  // 通过配置项写生命周期钩子
  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeUnmount() {},
  // unmounted() {}
}

/* 
  vue3声明周期
    - vue3中可以继续使用vue2中的生命周期钩子，有2个被更名
      +  beforeDestory 改为 beforeUnmount
      +  destoryed 改为 unmounted
    
    - vue3也提供了Composition API形式的生命周期钩子，与Vue2中钩子对应关系如下
      + beforeCreate  --- setup()
      + created       --- setup()
      + beforeMount   --- onBeforeMount
      + mounted       --- onMounted
      + beforeUpdate  --- onBeforeUpdate
      + updated       --- onUpdated
      + beforeUnmount --- onBeforeUnmount
      + unmounted     --- onUnmounted
    
    - 组合式执行的生命周期，比配置项的命周期快。 带on的在前边

    
*/
</script>
