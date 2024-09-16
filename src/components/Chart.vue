<template>
    <canvas ref="charts"></canvas>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Chart from 'chart.js/auto';
import _merge from 'lodash/merge'
import { noLegend, noGrid, noTicks, isBlank, noGridX, noGridY } from './utils.js'

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    options: {
        type: Object,
        default: {}
    },
    plugins: Object,
    type: {
        type: String,
        validator(value, props) {
            return ['bar', 'bubble', 'doughnut', 'pie', 'line', 'polar', 'radar', 'scatter'].includes(value)
        }
    },
    noLegend: Boolean,
    noGrid: Boolean,
    noGridX: Boolean,
    noGridY: Boolean,
    noTicks: Boolean,
    blank: Boolean
})

const charts = ref()
const chart = ref()

defineExpose({chart})

const finalOptions = computed(() => {
    const legend = props.noLegend == true ? noLegend : null
    const grid = props.noGrid == true ? noGrid: null
    const gridX = props.noGridX == true ? noGridX: null
    const gridY = props.noGridY == true ? noGridY: null
    const ticks = props.noTicks == true ? noTicks : null
    const blank = props.blank == true ? isBlank : null
    return _merge(props.options, legend, grid, gridX, gridY, ticks, blank)
})

onMounted(() => {
    chart.value = new Chart(charts.value, {
        type: props.type,
        options: finalOptions,
        data: props.data,
        plugins: props.plugins
    })
})
</script>