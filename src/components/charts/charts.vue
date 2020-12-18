<template>
  <div>
      <div id="homeChart"></div>
      
  </div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 引入柱状图
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
                text: '   趋势图',
                
            },
            tooltip: {

            },
            legend: {
                data:['num']
            },
            xAxis: {
                data: ["2020-1","2020-2","2020-3","2020-4","2020-5","2020-6","2020-7","2020-8",,"2020-9","2020-10","2020-11","2020-12"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [98, 100, 50, 40, 88, 60,90,40,50,20,80,95,80]
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
    width: 100%;
    height: 600px;
}
</style>
