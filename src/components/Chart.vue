<template>
    <canvas ref="charts"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto';

const props = defineProps({
   data: {
       type: Object,
       required: true
   },
   options: Object,
   plugins: Object,
   type: {
    type: String,
    validator(value, props) {
        return ['bar', 'bubble', 'doughnut', 'pie', 'line', 'polar', 'radar', 'scatter'].includes(value)
    }
   }
})

const charts = ref()

onMounted(() => {
   const chart = new Chart(charts.value, {
       type: props.type,
       options: props.options,
       data: props.data,
       plugins: props.plugins
   })
})
</script>