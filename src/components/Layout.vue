<template>
  <div class="page">
    <el-row :gutter="40">
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
        <div class="grid-content bg-purple-light"></div>
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="12" :pull="2">
        <div class="grid-content bg-purple"></div>
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
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
   // background: rgba(#000, 0.1);
    width:100%;
    height: 200px;
  }

  .bg-purple{
    background: #d3dce6;
  }
  .bg-purple-light{
    background:#e5e9f2;
  }

  .grid-content{
    border-radius: 4px;
    min-height: 36px;
  }
 
</style>
