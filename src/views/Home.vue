<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h3>按需引入 ECharts</h3>
    <div id="main"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'componentsPath/HelloWorld.vue'
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>
<style scoped lang="scss">
#main {
  width: 400px;
  height: 300px;
  margin: 0px auto;
}
</style>
