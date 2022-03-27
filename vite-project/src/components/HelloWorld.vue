<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <el-button @click="$store.commit('add')">3333</el-button>  
  <a href="#">{{$store.state.counter}}</a>
</template>

