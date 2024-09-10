<template>
     <canvas ref="areaChart"></canvas>
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

const areaChart = ref()

onMounted(() => {
    const chart = new Chart(areaChart.value, {
        type: 'line',
        options: props.options,
        data: props.data
    })
})
</script>