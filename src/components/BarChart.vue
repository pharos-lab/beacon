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
    label: String

})

const barChart = ref()

onMounted(() => {
    const chart = new Chart(barChart.value, {
        type: 'bar',
        options: props.options,
        data: {
            labels: props.data.map(row => row.label),
            datasets: [
            {
                label: props.label,
                data: props.data.map(row => row.value)
            },
            ]
        }
    })
})
</script>