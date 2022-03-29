<template>
  <i v-if="icon" :class="icon"></i>
  <span v-if="title">{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>
</style>