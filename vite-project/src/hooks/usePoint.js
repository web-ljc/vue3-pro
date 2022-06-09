import { reactive, onMounted, onUnmounted } from "vue"
export default function() {
  // 数据
  let point = reactive({
    x: 0,
    y: 0
  })

  // 方法
  const savePoint = (ev) => {
    point.x = ev.pageX
    point.y = ev.pageY
  }
  
  // 生命周期钩子
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onUnmounted(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
