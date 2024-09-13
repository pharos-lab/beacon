const noLegend = {
    plugins: {
        legend: {
            display: false
        }
    }
}

const noGrid = {  
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

const noTicks = {
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

const isBlank =  {
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
    
export {noLegend, noGrid, noTicks, isBlank }