<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          :collapse="false"
        >
          <el-menu-item index="1" @click="jump('/')">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2" @click="jump('/oms/customers-table')">
            <i class="el-icon-menu"></i>
            <span slot="title">oms</span>
          </el-menu-item>
          <el-menu-item index="3" @click="jump('/wms/qc-order')">
            <i class="el-icon-setting"></i>
            <span slot="title">wms</span>
          </el-menu-item>
         
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div class="content" style="overflow-x: hidden">
          <appMain></appMain>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
</style>

<script>
import appMain from "./app-main.vue";
export default {
  components: {
    appMain
  },
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    jump(val) {
      console.log(val, 32);
      this.$router.replace({ path: val });
    }
  }
};
</script>
