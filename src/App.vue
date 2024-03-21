<template>
  <!-- <HelloWorld /> -->
  <!-- 首页 -->
  <layout-page></layout-page>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import layoutPage from "./layout/index.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    layoutPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-container.is-vertical {
  height: 100vh;
}
.el-footer {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #dddddd;
}
</style>
