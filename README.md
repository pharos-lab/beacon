<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better please fork the repo and create a pull request or simple open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<p align="center"><h3 align="center">Beacon</h3>

  <p align="center">
    Easily put beautiful <strong>charts</strong> and <strong>graphics</strong> to your <strong>Vue<strong> application
    <br />
    ·
    <a href="https://github.com/pharos-lab/beacon/issues">Report Bug</a>
    ·
    <a href="https://github.com/pharos-lab/beacon/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#Table-of-Contents)
- [About The Project](#About-The-Project)
- [Getting Started](#Getting-Started)
  - [Prerequisites](#Prerequisites)
  - [Installation](#Installation)
- [Usage](#Usage)
  - [Examples](#Examples)
- [Contributing](#Contributing)
- [License](#License)
- [Contact](#Contact)

## About The Project

![DEMO PHOTO]()

Beacon let you use the power of <strong>[ChartJs]()</strong> within you Vue application by providing a wrapper component for fast and easy experience

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Install NPM packages

```sh
npm install @pharos-labo/beacon
```

<!-- USAGE EXAMPLES -->

## Usage

### Simple import

Just import the `Chart` component and use it in your template

```javascript
<script setup>
  import { Chart } from '@pharos-lab/beacon'
</script>

<template>
    <Chart :data="charData"></Chart>
</template>
```

### Beacon plugin

To use the **beacon** plugin, just import the plugin from the package and tell vue to use it!

```javascript

// main.js

import { createApp } from 'vue';
import { beacon } from '@pharos-labo/beacon'

import App from './App.vue';

const application = createApp(app);

application.use(beacon);
application.mount('#app');
```

Now You can use all the features of **beacon**!

The **beacon** plugin made the registration of the `Chart` component so you don't have to import it and can start using them directly.

```javascript
<template>
    <Chart :data="charData"></Chart>
</template>
```

## Props

### data

**Beacon** is a wrapper for the [ChartJs]() library so you must check out the [ChartJs data structure]() you need to provide

Basically, it's an object with `labels` and `datasets` property

```javascript
<template>
    <Chart :data="dataStructure"></Chart>
</template>

<script setup>
  const dataStructure = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'number of sales',
        data: [58, 27, 87]
      },
    ]
  }
```

This should display a chart like this one:

![photo]()

> You can display multiple sets of data in the `datasets` property


```javascript
<template>
    <Chart :data="dataStructure"></Chart>
</template>

<script setup>
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
```

This should display a chart like this one:

![photo]()

### Type prop

The `type` prop sets the type of chart you will display ('line', 'bar', ...)

Here's the following choice: 

- line
- bar
- bubble
- doughnut
- pie
- line
- polar
- radar
- scatter

```javascript
<template>
    <Chart type="bubble" :data="charData"></Chart>
</template>
```

> the `line` chart type is the one selected by default

### options prop
The options prop is the options configuration for the [ChartJs]() library, so you can configure how the chart will display (animations, colors, font, ...)


```javascript
<template>
    <Chart :options="options" :data="charData"></Chart>
</template>

<script setup>
    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }
</script>
```

> This example will hide the legend for the chart

### noLegend, noGrid, noTicks, and blank props

In the `options` prop you can customize you chart as you want following the [ChartJs configuration docs]().

**Beacon** offers you some props to quicly change some display of your charts.

### Legend

The `no-legend` prop remove the legend for your datasets

```javascript
<template>
    <Chart :data="data" no-legend></Chart>
</template>
```

This should display a chart like this one:

![photo]()

### grid

The `no-grid` prop remove all the grids, vertically **and** horizontally

```javascript
<template>
    <Chart :data="data" no-grid></Chart>
</template>
```

This should display a chart like this one:

![photo]()


### Ticks

The `no-ticks` prop remove the labels for X-axis and Y-Axis

```javascript
<template>
    <Chart :data="data" no-ticks></Chart>
</template>
```

This should display a chart like this one:

![photo]()


### blank

The `blank` prop remove the legend, the grids and the ticks.

It can be usefull for displaying a Chart in a card for example

```javascript
<template>
    <Chart :data="data" blank></Chart>
</template>
```

This should display a chart like this one:

![photo]()

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License.

<!-- CONTACT -->

## Contact

pharos-lab - [@pharos-lab](https://twitter.com/pharos-lab) - pharos-lab@gmail.com

Project Link: [https://github.com/pharos-lab/beacon](https://github.com/pharos-lab/beacon)