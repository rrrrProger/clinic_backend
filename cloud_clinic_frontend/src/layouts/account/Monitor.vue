<script>
export default {
  data() {
    return {
      chart: null,
      chart2: null,
      xVal: 0,
      options: {
        exportEnabled: true,
        title:{
          text: "Patient's Saturation"
        },
        data: [{
          type: "line",
          dataPoints: []
        }]
      },
      styleOptions: {
        width: "100%",
        height: "360px"
      }
    }
  },
  methods: {
    updateChart(count) {
      count = count || 1;
      var yVal = 98;
      for (var j = 0; j < count; j++) {
        yVal = yVal +  Math.round(0 + Math.random() *(-2-2));
        this.options.data[0].dataPoints.push({
          x: this.xVal++,
          y: yVal
        });
      }
      if (this.options.data[0].dataPoints.length > 10) {
        this.options.data[0].dataPoints.shift();
      }
      this.chart.render();
      setTimeout(this.updateChart, 1000);
    },
    chartInstance(chart) {
      this.chart = chart;
      this.updateChart(10);
    }
  }
}
</script>
<template>
    <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/>
</template>
