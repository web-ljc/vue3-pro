<template>
  <el-row>
    <el-col :span="12" class="text-left">
      <breadcrumb />
    </el-col>
    <el-col :span="12" class="text-right">
      <el-dropdown class="avatar-container mr-5" trigger='hover'>
        <div class="avatar-wrapper">{{ $t('nav.userCenter') }} </div>
        <el-dropdown-menu class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <a href="https://github.com/web-ljc" target="_blank">
            <el-dropdown-item>我的Github</el-dropdown-item>
          </a>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="avatar-container" trigger='hover' @command="handleCommand">
        <div class="avatar-wrapper">{{ $t('nav.language') }}</div>
        <el-dropdown-menu class="user-dropdown">
          <el-dropdown-item command="zh_CN">{{ $t('nav.ch') }}</el-dropdown-item>
          <el-dropdown-item command="en_US">{{ $t('nav.en') }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<script setup>
import Breadcrumb from './Breadcrumb.vue'
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
const handleCommand = (val) => {
  // console.info(val, 'val')
  proxy.$i18n.locale = val
}
</script>
<style lang="less">
.avatar-container {
  // color: #fff;
}
</style>
