<template>
  <el-container>
    <el-aside width="200px">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
    <!-- 顶部导航栏 -->
      <el-header>
        <navbar />
      </el-header>
      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import Sidebar from './components/Sidebar/index.vue'
</script>