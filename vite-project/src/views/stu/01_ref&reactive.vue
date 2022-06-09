<template>
  <div class="fa-div">
    <div> 姓名：{{ name }} </div>
    <div> 工作：{{ job.type }} </div>
    <div> 薪水：{{ job.salary }} </div>
    <el-button @click="changeName">改变名字</el-button>
  </div>
</template>

<script>
import {h, ref, reactive} from 'vue'

export default {
  name: 'Stu',
  props: ['msg'],
  setup(props, context) {
    console.log(props); // 接收入参，需要提前接收一下
    console.log(context); // 上下文
    console.log(context.attrs); // 没有接收的剩余入参 与 vue2的$attr类似
    // 引用实现的实例，引用对象
    let name = ref('张三')
    // 对象
    let job = reactive({
      type: 'web',
      salary: '30k'
    })

    function sayHi() {
      console.log(name);
    }

    function changeName() {
      name.value = '李四'
      // job.value.type='node' // 通过ref创建响应式数据
      job.type = 'node'
      console.log(name, job);
    }

    return {
      name,
      job,
      sayHi,
      changeName
    }

    // 返回一个函数(渲染函数)
    // return () => h('div', name)
  }
}

/* 
  ## setup
    - Vue3.0中一个新的配置项，值为一个函数
    - setup是所有 Composition API（组合API）表演的舞台
    - 组件中所用到的：数组、方法等等，都要配置再steup中
    - setup函数的2种返回值
      + 若返回一个对象，则对象中的属性、方法，在模版中均可直接使用。
      + 若返回一个渲染函数，则可以自定义渲染内容
    - 注意
      + 尽量不要与vue2混合使用
        1. vue2配置可以访问到setup中的属性、方法
        2. 在setup中不能访问到vue2配置
        3. 如果重名setup优先
      + setup不能是一个async函数，因为返回值不在是return的对象，而是promise，模版中看不到return对象中的属性
      + setup执行时机，在beforeCreate之前执行一次，this是undefined
      + setup参数
        - props 值为对象，组件外部传递过来，且组件内部声明接收了的属性
        - content 上下文对象

  
  ## ref()
    - 引用实现的实例， 引用对象
    - 定义一个响应式的数据
    - 语法
      import {ref} from 'vue'
      let name = ref(initValue)
      - 创建一个包含响应式数据的引用对象(reference对象，ref对象)
      - JS中数据操作 xxx.value
      - 模版中读取数据，不需要.value, 直接使用{{name}}
    - 备注
      - 接收的数据可以是：基本类型、对象类型
      - 基本类型数据：响应式依然是靠Object.defineProperty()的get和set完成
      - 对象类型数据：内部借助于vue3中的新函数 -- reactive函数
    - 属性
      RefImpl {
        dep: {}
        __v_isRef: true
        __v_isShallow: false
        _rawValue: 'zs'
        _value: 'zs'
        value: 'zs'
      }
  ## reactive()
    - 定义一个 对象类型 的响应数据（基本类型不要用reactive，要用ref函数）
    - 语法
      const 代理对象 = reactive(源对象)接收一个对象（或数组），返回一个代理对象（proxy的实例对象，proxy对象）
    - reactive定义的响应式数据是‘深层次的’
    - 内部基于ES6的proxy实现，通过代理对象操作源对象内部数据进行操作
  
  ## reactive和ref对比
    - 从定义数据角度对比：
      - ref用来定义：基本类型数据
      - reactive用来定义：对象或数组类型数据
      - ref也可以用来定义对象或数组类型数据，它内部会自动通过reactive转为代理对象
    - 从原理角度对比：
      - ref通过 Object.defineProperty() 的 get 和 set 实现响应式
      - reactive通过 proxy 实现响应式，并通过 Reflect 操作源对象内部的数据
    - 使用角度对比：
      - ref定义的数据：操作数据需要 .value  读取数据时模版中直接读取不需要 .value
      - reactive定义的数据：操作数据与读取数据：均不需要.value


*/
</script>
