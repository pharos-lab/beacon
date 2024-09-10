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
   plugins: Object
})

const charts = ref()

onMounted(() => {
   const chart = new Chart(charts.value, {
       type: 'line',
       options: props.options,
       data: props.data
   })
})
</script>