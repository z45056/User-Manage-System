<template>
  <div id="home">
    <div class="home-left">
      <el-menu
        mode="vertical"
        default-active="defaultActive"
        router
        background-color="gray"
        text-color="#fff"
        style="border: none"
      >
        <el-menu-item index="home" key="1" style="width: 100%">
          <i class="el-icon-menu"></i>
          <span slot="title">瓦罗兰</span>
        </el-menu-item>
        <el-submenu index="Valoran">
          <template slot="title">城邦</template>
          <el-menu-item
            style="padding:0"
            v-for="item in citystate"
            :index="item.name"
            :key="item.id"
          >
            {{ item.title }}
          </el-menu-item>
        </el-submenu>
        <el-submenu index="AddCity">
          <template slot="title">Add the polis</template>
          <el-menu-item
            v-for="item in heroList"
            :index="item.name"
            :key="item.id"
          >
            {{ item.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="home-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import charts from "../charts/charts";
import Valoran from "./Valoran";
export default {
  components: { charts, Valoran },
  name: "home",
  data() {
    return {
      citystate: [
        {
          id: "1",
          name: "Ionia",
          title: "艾欧尼亚",
        },
        {
          id: "2",
          name: "blackRose",
          title: "黑色玫瑰",
        },
        {
          id: "3",
          name: "Noxus",
          title: "诺克萨斯",
        },
        {
          id: "4",
          name: "Demacia",
          title: "德玛西亚",
        },
      ],
      heroList: [
        {
          id: "5",
          name: "NewCity",
          title: "添加城邦",
        },
        {
          id: "6",
          name: "NewHero",
          title: "添加英雄",
        },
      ],
    };
  },
  created() {},
  // mounted () {},
  computed: {
    // defaultActive:function(){
    //   return this.$router.path.replace('/', '');
    // }
  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgb(180, 175, 175);
  .home-left {
    width: 12%;
    height: 100vh;
    background-color: rgb(202, 130, 130);
  }
  .home-right {
    width: 88%;
    height: 100vh;
    background-color: #fff;
  }
}
</style>
