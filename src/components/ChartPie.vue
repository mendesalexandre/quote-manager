<script>
import { Line } from 'vue-chartjs'

export default Line.extend({
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, { responsive: true, maintainAspectRatio: false })
  }
})
</script>
