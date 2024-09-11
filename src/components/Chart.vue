<template>
    <canvas ref="charts"></canvas>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Chart from 'chart.js/auto';
import _merge from 'lodash/merge'

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
    legend: {
        type: Boolean,
        default: null
    },
    grid: {
        type: Boolean,
        default: null
    },
    ticks: {
        type: Boolean,
        default: null
    },
})

const charts = ref()

const legend = computed(() => {
    if (props.legend == null) {
        return 
    } else {
        return {
            plugins: {
                legend: {
                    display: props.legend
                }
            }
        }
    }
})

const grid = computed(() => {
    if (props.grid == null) {
        return 
    } else {
        return {
            scales: {
                x: {
                    grid: {
                        display: props.grid
                    },
                },
                y: {
                    grid: {
                        display: props.grid
                    },
                }
            }
        }
    }
})

const ticks = computed(() => {
    if (props.ticks == null) {
        return 
    } else {
        return {
            scales: {
                x: {
                    ticks: {
                        display: props.ticks
                    }
                },
                y: {
                    ticks: {
                        display: props.ticks
                    }
                }
            }
        }
    }
})

onMounted(() => {
    console.log(_merge(props.options, legend.value, grid.value))
   const chart = new Chart(charts.value, {
       type: props.type,
       options: _merge(props.options, legend.value, grid.value, ticks.value),
       data: props.data,
       plugins: props.plugins
   })
})
</script>