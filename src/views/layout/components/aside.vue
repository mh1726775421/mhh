<template>
  <div>
    <el-menu
    class="nav"
      default-active="2"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-menu"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-sunrise-1"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="iconfont iconimage"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/comment">
      <i class="iconfont iconcomment"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="el-icon-setting"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="/settings">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { getProfile } from "@/api/user"
export default {
  name: "Aside",
  components: {},
  created(){
      this.loadProfile();
  },
  methods: {
      loadProfile(){
                getProfile().then(res=>{
                    console.log(res);
                });
      }

  },
};

</script>

<style>
.nav .iconfont {
    margin-right: 10px;
    padding-left: 5px;
  }

</style>