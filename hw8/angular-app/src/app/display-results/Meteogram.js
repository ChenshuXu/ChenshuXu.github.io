function Meteogram(json, container) {
  // Parallel arrays for the chart data, these are populated as the JSON file
  // is loaded
  this.winds = [];
  this.temperatures = [];
  this.pressures = [];
  this.humidity = [];

  // Initialize
  this.json = json;
  this.container = container;

  // Run
  this.parseData();
}

/**
 * Draw blocks around wind arrows, below the plot area
 */
Meteogram.prototype.drawBlocksForWindArrows = function(chart) {
  const xAxis = chart.xAxis[0];

  for (
    let pos = xAxis.min, max = xAxis.max, i = 0; pos <= max + 36e5; pos += 36e5,
    i += 1
  ) {

    // Get the X position
    const isLast = pos === max + 36e5,
      x = Math.round(xAxis.toPixels(pos)) + (isLast ? 0.5 : -0.5);

    // Draw the vertical dividers and ticks
    const isLong = this.resolution > 36e5 ?
      pos % this.resolution === 0 :
      i % 2 === 0;

    chart.renderer
      .path([
        'M', x, chart.plotTop + chart.plotHeight + (isLong ? 0 : 28),
        'L', x, chart.plotTop + chart.plotHeight + 32,
        'Z'
      ])
      .attr({
        stroke: chart.options.chart.plotBorderColor,
        'stroke-width': 1
      })
      .add();
  }

  // Center items in block
  chart.get('windbarbs').markerGroup.attr({
    translateX: chart.get('windbarbs').markerGroup.translateX + 8
  });

};

/**
 * Build and return the Highcharts options structure
 */
Meteogram.prototype.getChartOptions = function() {
  return {
    chart: {
      renderTo: this.container,
      marginBottom: 70,
      marginRight: 40,
      marginTop: 50,
      plotBorderWidth: 1,
      height: 500,
      alignTicks: false,
      scrollablePlotArea: {
        minWidth: 1000
      }
    },

    title: {
      text: 'Hourly Weather (for next five days)',
      align: 'center',
      style: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    },

    credits: {
      text: 'Forecast',
      position: {
        x: -40
      }
    },

    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat: '<small>{point.x:%A, %b %e, %H:%M}</small><br>'
    },

    xAxis: [{ // Bottom X axis
      type: 'datetime',
      tickInterval: 2 * 36e5, // two hours
      minorTickInterval: 36e5, // one hour
      tickLength: 0,
      gridLineWidth: 1,
      gridLineColor: 'rgba(128, 128, 128, 0.1)',
      startOnTick: false,
      endOnTick: false,
      minPadding: 0,
      maxPadding: 0,
      offset: 30,
      showLastLabel: true,
      labels: {
        format: '{value:%H}'
      },
      crosshair: true
    }, { // Top X axis
      linkedTo: 0,
      type: 'datetime',
      tickInterval: 24 * 3600 * 1000,
      labels: {
        format: '{value:<span style="font-size: 12px; font-weight: bold">%a</span> %b %e}',
        align: 'left',
        x: 3,
        y: -5
      },
      opposite: true,
      tickLength: 20,
      gridLineWidth: 1
    }],

    yAxis: [{ // temperature axis
      title: {
        text: null
      },
      labels: {
        format: '{value}°',
        style: {
          fontSize: '10px'
        },
        x: -3
      },
      plotLines: [{ // zero plane
        value: 0,
        color: '#BBBBBB',
        width: 1,
        zIndex: 2
      }],
      maxPadding: 0.3,
      minRange: 8,
      tickInterval: 1,
      gridLineColor: 'rgba(128, 128, 128, 0.1)'

    }, { // humidity axis
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      gridLineWidth: 0,
      tickLength: 0,
      minRange: 10,
      min: 0

    }, { // Air pressure
      allowDecimals: false,
      title: { // Title on top of axis
        text: 'inHg',
        offset: 0,
        align: 'high',
        rotation: 0,
        style: {
          fontSize: '10px',
          color: '#ffa40d'
        },
        textAlign: 'left',
        x: 3
      },
      labels: {
        style: {
          fontSize: '8px',
          color: '#ffa40d'
        },
        y: 2,
        x: 3
      },
      gridLineWidth: 0,
      opposite: true,
      showLastLabel: false
    }],

    legend: {
      enabled: false
    },

    plotOptions: {
      series: {
        pointPlacement: 'between'
      }
    },


    series: [{
      name: 'Temperature',
      data: this.temperatures,
      type: 'spline',
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true
          }
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y}°F</b><br/>'
      },
      zIndex: 1,
      color: '#FF3333',
      negativeColor: '#48AFE8'
    }, {
      name: 'Humidity',
      data: this.humidity,
      type: 'column',
      color: '#68CFE8',
      yAxis: 1,
      groupPadding: 0,
      pointPadding: 0,
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '8px',
          color: 'gray'
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} %</b><br/>'
      },
      grouping: false
    }, {
      name: 'Air pressure',
      color: '#ffa40d',
      data: this.pressures,
      marker: {
        enabled: false
      },
      shadow: false,
      tooltip: {
        valueSuffix: ' inHg'
      },
      dashStyle: 'shortdot',
      yAxis: 2
    }, {
      name: 'Wind',
      type: 'windbarb',
      id: 'windbarbs',
      color: Highcharts.getOptions().colors[1],
      lineWidth: 1.5,
      data: this.winds,
      vectorLength: 10,
      yOffset: -20,
      tooltip: {
        valueSuffix: ' m/s'
      }
    }]
  };
};

/**
 * Post-process the chart from the callback function, the second argument
 * Highcharts.Chart.
 */
Meteogram.prototype.onChartLoad = function(chart) {
  this.drawBlocksForWindArrows(chart);
};

/**
 * Create the chart. This function is called async when the data file is loaded
 * and parsed.
 */
Meteogram.prototype.createChart = function() {
  this.chart = new Highcharts.Chart(this.getChartOptions(), chart => {
    this.onChartLoad(chart);
  });
};

Meteogram.prototype.error = function() {

};

Meteogram.prototype.parseData = function () {
  let pointStart;
  // console.log(this.json);
  if (!this.json) {
    return this.error();
  }
  let timeline = this.json.data.timelines[0].intervals;
  // console.log(timeline);
  // Loop over timelines
  for (let i = 0; i < timeline.length; i++) {
    let node = timeline[i];
    let values = node.values;
    let x = new Date(node.startTime);
    let to = x + 36e5;

    if (to > pointStart + 5 * 24 * 36e5) {
      return;
    }

    this.temperatures.push({
      x,
      y: values.temperature,
      to
    });

    this.humidity.push({
      x,
      y: values.humidity
    });

    if (i % 2 === 0) {
      this.winds.push({
        x,
        value: values.windSpeed,
        direction: values.windDirection
      });
    }

    this.pressures.push({
      x,
      y: values.pressureSeaLevel
    });

    if (i === 0) {
      pointStart = (x + to) / 2;
    }
  }

  // Create the chart when the data is loaded
  // this.createChart();
}
