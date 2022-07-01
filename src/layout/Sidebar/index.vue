<template>
  <div>
    <div class="title">
      <img class="title-img" src="../../assets/logo-small@2x.png" />
      <h1 class="sidebar-title">usian-admin</h1>
    </div>
    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
</script>

<style lang="scss" scoped>
.sidebar-title {
  text-align: center;
  font-size: 22px;
  color: #fff;
  line-height: 85px;
}
.title {
  width: 100%;
  height: 85px;
  .title-img {
    width: 40px;
    height: 40px;
    margin: 20px 0px 20px 10px;
    float: left;
  }
}
</style>
