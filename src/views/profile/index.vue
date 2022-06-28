<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#fff"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#ccc"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-menu-item index="1" class="el-menu-item1">
            <img src="../../assets/logo-small@2x.png" class="img" />
            <span class="title">&emsp;imooc-admin</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>
              <svg-icon className="svg-personnel" icon="personnel"></svg-icon>
            </el-icon>
            <span>个人中心</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon color="#409EFC" class="no-inherit">
              <Histogram />
            </el-icon>
            <span>数据可视化</span>
          </el-menu-item>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <svg-icon className="svg-personnel" icon="personnel"></svg-icon>
              </el-icon>
              <span>用户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <el-icon>
                  <svg-icon className="svg-personnel-manage" icon="personnel-manage"></svg-icon>
                </el-icon>
                员工管理</el-menu-item>
              <el-menu-item index="1-2">
                <el-icon>
                  <svg-icon className="svg-role" icon="role"></svg-icon>
                </el-icon>
                角色列表</el-menu-item>
              <el-menu-item index="1-3">
                <el-icon>
                  <svg-icon className="svg-permission" icon="permission"></svg-icon>
                </el-icon>
                权限列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon>
                <svg-icon className="svg-article" icon="article"></svg-icon>
              </el-icon>
              <span>文章</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <el-icon>
                  <svg-icon className="svg-article-ranking" icon="article-ranking"></svg-icon>
                </el-icon>
                文章排名</el-menu-item>
              <el-menu-item index="2-2">
                <el-icon>
                  <svg-icon className="svg-article-create" icon="article-create"></svg-icon>
                </el-icon>
                创建文章</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="navbar">
            <div class="icon" @click="isCollapse = !isCollapse">
              <el-icon v-if="isCollapse === false">
                <svg-icon className="svg-hamburger-opened" icon="hamburger-opened"></svg-icon>
              </el-icon>
              <el-icon v-if="isCollapse === true">
                <svg-icon className="svg-hamburger-closed" icon="hamburger-closed"></svg-icon>
              </el-icon>
            </div>
             <div class="icons">
                <el-icon>
                  <svg-icon className="svg-guide" icon="guide"></svg-icon>
                </el-icon>
                <el-icon>
                  <svg-icon className="svg-search" icon="search"></svg-icon>
                </el-icon>
                <el-icon>
                  <svg-icon className="svg-fullscreen" icon="fullscreen"></svg-icon>
                </el-icon>
                <el-icon>
                  <svg-icon className="svg-change-theme" icon="change-theme"></svg-icon>
                </el-icon>
                <el-icon>
                  <svg-icon className="svg-language" icon="language"></svg-icon>
                </el-icon>
            <img src="../../assets/logo-small@2x.png" class="img1" /></div>
          </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Histogram } from '@element-plus/icons-vue'
const isCollapse = ref(false)
</script>
<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 95vh;
}

.el-aside {
  display: flex;
  flex-basis: content;
  .img {
    width: 40px;
    height: 40px;
  }
  .title {
    font-size: 16px;
    color: white;
    font-weight: 600;
  }
  .el-menu-item1 {
    height: 80px;
  }
}

.el-header {
  background-color: aquamarine;
  height: 80px;
  .navbar {
    height: 50px;
    background-color: aqua;
     .icon {
    width: 40px;
    height: 50px;
    float: left;
    .el-icon {
      margin-left: 10px;
      margin-top: 10px;
    }
  }
   .icon:hover {
      background-color: rgb(249, 247, 247);
    }
    .img1 {
      width: 40px;
      height: 40px;
       margin-left: 15px;
       margin-top: 3px;
    }
    .icons{
        float: right;
        .el-icon{
            margin-left: 15px;
            vertical-align: .5em;
        }
    }
  }
 
}
</style>
