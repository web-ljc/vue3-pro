<template>
  <el-button @click="$store.commit('add')">{{count}}</el-button>
  <a href="#">{{$store.state.base.counter}}</a>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

