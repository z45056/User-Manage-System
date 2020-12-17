<template>
  <div>
      <div id="homeChart"></div>
      <p>哈哈哈</p>
  </div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
引入柱状图
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: 'homeChart',
  data () {
    return {}
  },
  created () {},
  mounted () {
      var homeChart = echarts.init(document.getElementById('homeChart'));
      var option = {
            title: {
                text: '三年级成绩表'
            },
            tooltip: {},
            legend: {
                data:['分数']
            },
            xAxis: {
                data: ["语文","数学","物理","化学","英语","生物"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [98, 100, 0, 0, 88, 0]
            }]
        };
        homeChart.setOption(option);

  },
  computed: {
      

  },
  watch: {},
  methods: {}
}
</script>

<style lang="less" scoped>
#homeChart{
    width: 600px;
    height: 400px;
}
</style>
