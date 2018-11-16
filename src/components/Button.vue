<template>
  <div class="page">
    <el-row>
      <el-button type="info" :loading="true"></el-button>
      <el-button type="success"></el-button>
      <el-button type="warning" :circle="true"></el-button>
    </el-row>
    <div class="icon-connection-empty"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.page{
  background: rgba(#0f0,0.2);
  width: 100%;
  height: 200px;
}
 
</style>
