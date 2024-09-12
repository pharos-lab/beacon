<template>
    <div>

        <Chart :data="data" :options="options" type="line" blank></Chart>
    </div>
</template>

<script setup>
import Chart from './components/Chart.vue'

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
            fill: 'origin',
            label: 'test 1',
            data: rawData.map(row => row.count)
        },
        {
            fill: '',
            label: 'test 1',
            data: rawData.map(row => row.count * 2 -8)
        },
    ]
}

const options = {
    plugins: {
        legend: {
            display: true,
        }
    },
    scales: {
        x: {
            //display: false,
            //ticks: false
        },
        y: {
            grid: {
                //display: false
            },
        }
    }
}


</script>