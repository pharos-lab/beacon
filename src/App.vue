<template>
    <BarChart :data="data"></BarChart>
    <AreaChart :data="area"></AreaChart>
</template>

<script setup>
import BarChart from './components/BarChart.vue';
import AreaChart from './components/AreaChart.vue'

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
    datasets: [
        {
            label: 'test 1',
            data: rawData.map(row => row.count)
        },
        {
            label: 'test 1',
            data: rawData.map(row => row.count)
        },
    ]
}

const area = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f'],
    datasets: [
        {data: [1,8,5,4,6,7], fill: 'origin'},      // 0: fill to 'origin'
        {data: [4,5,8,1,2,6],fill: '+2'},          // 1: fill to dataset 3
        {data: [5,1,2,3,6,7],fill: 1},             // 5: fill to axis value 25
    ]
}

</script>