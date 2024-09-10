<template>
    <BarChart :data="data" label="test ok"></BarChart>
</template>

<script setup>
import BarChart from './components/BarChart.vue';

const rawData = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 60 },
    { year: 2013, count: 40 },
    { year: 2014, count: 80 },
    { year: 2015, count: 10 },
    { year: 2016, count: 90 },
]
const data = {
    labels: rawData.map(row => row.year),
    datasets: [{
        label: 'test 1',
        data: rawData.map(row => row.count)},
    ]
}
</script>