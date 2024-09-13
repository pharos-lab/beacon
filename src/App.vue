<template>
    <div>
        <Chart :data="dataStructure" options="options" type="bar"></Chart>
    </div>
</template>

<script setup>
//import Chart from './components/Chart.vue'
import { Chart } from '../dist/beacon.js'

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

const dataStructure = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'number of sales',
        data: [58, 27, 87]
      },
      {
        label: 'number of buys',
        data: [85, 36, 24]
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