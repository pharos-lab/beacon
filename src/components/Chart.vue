<template>
    <canvas ref="charts"></canvas>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
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
    },
    legend: {
        type: Boolean,
        default: true
    }
})

const charts = ref()

const legend = computed(() =>  {
    return {
        plugins: {
            legend: {
                display: props.legend
            }
        }
    }
})

onMounted(() => {
   const chart = new Chart(charts.value, {
       type: props.type,
       options: {...props.options, ...legend.value},
       data: props.data,
       plugins: props.plugins
   })
})
</script>