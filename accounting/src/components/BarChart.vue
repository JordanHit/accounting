<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<script>
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {barData} from "@/barData.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {Bar},
  props: ['items'],
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
            {
              label: '',
              data: [1,2,3],
              backgroundColor: ['rgba(32, 150, 188, 0.68)'],
            }
        ]
      },
      chartOptions: {
        responsive: true
      },
      objChart: '',
    }
  },
  created() {
    this.objChart = barData(this.items)
    console.log(this.objChart)
    this.chartData.labels = this.objChart.rooms
    this.chartData.datasets[0].data = this.objChart.count
  }
}
</script>