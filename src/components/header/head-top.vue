<template>
  <div class="head">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">瓦罗兰 </el-breadcrumb-item>
      <el-breadcrumb-item :key="item" v-for="item in $route.meta">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown  @command="exit">
      <img src="../../assets/userImg.jpg" alt="" class="avator" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="user">用户中心</el-dropdown-item>
        <el-dropdown-item command="set">设置</el-dropdown-item>
        <el-dropdown-item command="out">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "head_top",
  data() {
    return {};
  },
  created() {},
  // mounted () {},
  computed: {},
  watch: {},
  methods: {
    exit(command) { 
      console.log(123);
      if (command === "out") {
        Vue.axios.get("/admin/signout").then((res) => {
        });
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 60px;
  background-color: rgb(246, 236, 236);
  .el-breadcrumb {
    float: left;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    margin-left: 20px;
  }
  .el-dropdown {
    height: 40px;
    padding: 10px 20px;
    float: right;

    .avator {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
  }
}
</style>
