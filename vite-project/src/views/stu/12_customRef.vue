<template>
  <div class="fa-div">
    <input type="text" v-model="keyWord" />
    <div> {{ keyWord }} </div>
  </div>
</template>
 
<script>
import { ref, customRef, } from 'vue'

export default {
  name: 'Stu',
  setup() {

    // 自定义ref
    let myRef = (value, delay) => {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            track() // 通知vue追踪value的变化
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() // 通知vue重新解析模版
            }, delay)
          }
        }
      })
    }
    let keyWord = myRef('hi', 1000)

    return {
      keyWord
    }
  },
}

/* 
  其它 Composition API
    1. customRef
      - 作用：创建一个自定义的ref，并对其以来项跟踪和更新触发进行显示控制

*/
</script>
