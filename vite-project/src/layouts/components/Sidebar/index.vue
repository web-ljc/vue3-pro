<template>
  <el-menu :default-openeds="['1']">
      <el-submenu index="1">
        <template v-slot:title>
          <i class="el-icon-menu"></i>Vue2
        </template>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template v-slot:title>
          <i class="el-icon-menu"></i>Vue3
        </template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template v-slot:title>
          <i class="el-icon-setting"></i>React
        </template>
        <el-submenu index="1-4">
          <template v-slot:title>选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>