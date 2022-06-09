<template>
  <div class="fa-div">
    <div> 姓名：{{ job.name }} </div>
    <div> 工作：{{ job.type }} </div>
    <div> 薪水：{{ job.salary }} </div>
  </div>
</template>

<script>
import {h, ref, reactive} from 'vue'

export default {
  name: 'Stu',
  setup() {
    let job = reactive({
      name: '张三',
      type: 'web',
      salary: '30k'
    })

    return {
      job,
    }
  }
}

/* 
  ## vue2 响应式原理
    - 实现原理
      - 对象类型：通过Object.defineProperty()对属性的读取、修改进行拦截（数据劫持）
      - 数组类型：通过重写更新数组的一系列方法来实现拦截
    - 存在问题
      1. 新增属性、删除属性界面不会更新
      2. 直接通过下标修改数组，界面不会自动更新
  
  ## vue3的响应式
    - 实现原理
      - 通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等
      - 通过Reflect（反射）：对被代理对象的属性进行操作
        + Reflect调用方法，返回 boolean 减少try...catch...
    
*/
;(function() {
  let person = {
    name: 'zs'
  }

  const p = new Proxy(person, {
    get(target, propName) {
      console.log('读取某个属性');
      console.log(`读取${target}的${propName}属性`);
      // return target[propName]
      return Reflect.get(target, propName)
    },
    set(target, propName, value) {
      console.log('添加、更改属性');
      // target[propName] = value
      return Reflect.set(target, propName, value)
    },
    deleteProperty(target, propName) {
      console.log('删除属性');
      // return delete target[propName]
      return Reflect.deleteProperty(target, propName)
    }
  })
  console.log(p.name);
})()

;(function(){
  let person = {
    name: 'zs'
  }
  let obj = {}
  // 不能修改自身的属性，会触发死循环
  Object.defineProperty(obj, 'name', {
    configurable: true, // 可删除
    get() {
      return person.name // 读取
    },
    set(value) {
      person.name = value // 修改
    }
  })
})()
</script>
