<template>
  <el-row>
    <el-col :span="12" class="text-left">
      Vue Project
    </el-col>
    <el-col :span="12" class="text-right">
      <el-dropdown class="avatar-container" trigger='hover'>
        <div class="avatar-wrapper">
          个人中心
        </div>
        <el-dropdown-menu class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <a href="" target="_blank">
            <el-dropdown-item>我的Github</el-dropdown-item>
          </a>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<style lang="less">
.avatar-container {
  // color: #fff;
}
</style>
