<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 :style="{ color: msgColor }">{{ test }}</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <h3>全量引入 ECharts</h3>
    <div id="main2"></div>
  </div>
</template>
<script>
import { aboutAPI } from '@/service'
// 全量引入 echarts
const echarts = require('echarts')

export default {
  data () {
    return {
      test: '',
      msgColor: ''
    }
  },
  created () {
    aboutAPI
      .queryHomeOverview()
      .then(result => {
        console.log(result)
        this.test = JSON.stringify(result)
        this.msgColor = 'green'
      })
      .catch(err => {
        this.test = err.message
        this.msgColor = 'red'
        console.log(err)
      })
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main2'))
      console.log(myChart)
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子1']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>
<style scoped lang="scss">
#main2 {
  width: 400px;
  height: 300px;
  margin: 0px auto;
}
</style>
