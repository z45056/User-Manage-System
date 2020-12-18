<template>
  <div class="Valoran">
    <div class="head">
      <head_top></head_top>
    </div>
    <div class="main">
      <!-- 120 -->
      <!-- 40 -->
      <h2>数据统计</h2>
      <!-- 80 -->
      <div class="container">
        <div class="user-content">
          <span>总用户量：<i class="font-orange">{{overallUsers}}</i></span>
          <span>注册用户：<i class="font-skyblue">{{registeredUser}}</i></span>
        </div>
        <div class="order-content">
          <span>总订单量：<i class="font-orange">{{orderAmount}}</i></span>
          <span>新增订单：<i class="font-skyblue">{{newOrders}}</i></span>
        </div>
        <div class="administration">
          <span>管理员：<i class="font-orange">{{administrator}}</i></span>
          <span>新增管理员：<i class="font-skyblue">{{newAdministrator}}</i></span>
        </div>
      </div>
    </div>
    <div class="chart">
      <charts></charts>
    </div>
  </div>
</template>

<script>
import head_top from "../header/head-top";
import charts from "../charts/charts";

export default {
  name: "",
  data() {
    return {
      overallUsers:'0',
      registeredUser:'55',
      orderAmount:'5',
      newOrders:'0',
      administrator:'0',
      newAdministrator:'0',

    };
  },
  components: {
    charts,
    head_top,
  },
  created() {},
  // mounted () {},
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.Valoran {
  width: 100%;
  height: 100vh;

  .main {
    width: 100%;
    margin-bottom: 20px;

    h2 {
      height: 50px;
      text-align: center;
      font-size: 24px;
      line-height: 50px;
    }
    .container {
      height: 80px;
      display: flex;
      border: 1px solid rgb(218, 215, 215);
      line-height: 80px;
      color: gray;
      .user-content {
        flex: 1;
      
      }

      .order-content {
        flex: 1;
        border-left: 1px solid rgb(218, 215, 215);
        border-right: 1px solid rgb(218, 215, 215);
      }

      .administration {
        flex: 1;
      }
    }
  }
}
span {
  display: inline-block;
  width: 50%;
  height: 80px;
  line-height: 80px;
}
i{
  font-style: normal;
  font-size: 30px;
  line-height: 80px;
}
.font-orange{
  color: orange;
}
.font-skyblue{
  color: skyblue;
}

</style>
