<template>
  <div id="app">
    <transition
      mode="out-in"
      appear
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// 引入组件
export default {
  name: "App"
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "./styles/base.scss";
</style>
