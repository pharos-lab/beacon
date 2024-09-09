<template>
    <BarChart :data="data" label="test ok"></BarChart>
</template>

<script setup>
import BarChart from './components/BarChart.vue';

const data = [
    { label: 2010, value: 10 },
    { label: 2011, value: 20 },
    { label: 2012, value: 15 },
    { label: 2013, value: 25 },
    { label: 2014, value: 22 },
    { label: 2015, value: 30 },
    { label: 2016, value: 28 },
  ];
</script>