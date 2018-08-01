{
    var options = {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'sales',
            data: [30,40,35,50,49,60,70,91,125]
        }],
        xaxis: {
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        }
    }
    var chart = new ApexCharts(document.querySelector("#chartLine"), options);
    chart.render();
}
{
    var options = {
        chart: {
            type: 'pie'
        },
        series: [30,40,35,50,49,60,70,91,125]
    }
    var chart = new ApexCharts(document.querySelector("#chartDonut"), options);
    chart.render();
}

function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}
{
    var options = {
        chart: {
            height: 380,
            type: 'heatmap',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#008FFB"],
        series: [{
                name: 'Metric1',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric2',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric3',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric4',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric5',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric6',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric7',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric8',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric9',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            }
        ],
        xaxis: {
            type: 'category',
        },
        title: {
            text: 'HeatMap Chart (Single color)'
        },

    }

    var chart = new ApexCharts(
        document.querySelector("#chartHeatMap"),
        options
    );

    chart.render();
}