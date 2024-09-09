<template>
    <canvas ref="barChart"></canvas>
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

})

const barChart = ref()

onMounted(() => {
    const chart = new Chart(barChart.value, {
        type: 'bar',
        options: props.options,
        data: props.data
    })
})
</script>