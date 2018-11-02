<template>
  <div id="app">
    <h6>hot upgrade</h6>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <f-layout></f-layout>
    <f-button></f-button>
    <tab-router></tab-router>
    <router-view></router-view>
  </div>
</template>

<script>
import FLayout from './components/Layout'
import FButton from "./components/Button"
import TabRouter from '@/components/common/TabRouter'
export default {
  name: 'app',
  components: {
    FLayout,
    FButton,
    TabRouter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
