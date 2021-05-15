<template>
  <div>
    <el-container class="container">
      <el-aside class="aside" width="200px">
        <Aside class="menu"></Aside>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div>
            <i class="el-icon-s-fold"></i>
            <span>有限责任公司</span>
          </div>

          <el-dropdown>
            <div class="avatar-wrap">
              <img class="avatar" src="" alt="" />
              <span>用户名</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人设置</el-dropdown-item>
              <el-dropdown-item>用户退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "./components/aside";
export default {
  components: { Aside },
};
</script>

<style>
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.container .aside {
  background-color: #d3dce6;
}
.menu {
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.avatar-wrap {
  display: flex;
  align-items: center;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
.main {
  background-color: #e9eef3;
}
</style>