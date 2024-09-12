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
    noLegend: Boolean,
    noGrid: Boolean,
    noTicks: Boolean,
    blank: Boolean
})

const charts = ref()

const legend = computed(() => {
    if (props.noLegend == true) {
        return {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
})

const grid = computed(() => {
    if (props.noGrid == true) {
        return {
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                },
                y: {
                    grid: {
                        display: false
                    },
                }
            }
        }
    } 
})

const ticks = computed(() => {
    if (props.noTicks == true) {
        return {
            scales: {
                x: {
                    ticks: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                        display: false
                    }
                }
            }
        }
    } 
})

const blank = computed(() => {
    if (props.blank == true) {
        return {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    }
                }
            }
        }
    } 
})

onMounted(() => {
    const chart = new Chart(charts.value, {
        type: props.type,
        options: _merge(props.options, legend.value, grid.value, ticks.value, blank.value),
        data: props.data,
        plugins: props.plugins
    })
})
</script>