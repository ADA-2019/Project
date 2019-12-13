/**
 *    FORUM
 */

var ctx = document.getElementById('forum_chart').getContext('2d');
var forumChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

      maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



/**
 *    Products
 */
var ctx = document.getElementById('numberOfProducts_chart').getContext('2d');

var nbProductsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [moment("2014-01-01", "YYYY-MM-DD"),moment("2014-01-09", "YYYY-MM-DD"),moment("2014-01-16", "YYYY-MM-DD"),moment("2014-01-26", "YYYY-MM-DD"),moment("2014-02-02", "YYYY-MM-DD"),moment("2014-02-05", "YYYY-MM-DD"),moment("2014-02-23", "YYYY-MM-DD"),moment("2014-02-24", "YYYY-MM-DD"),moment("2014-02-28", "YYYY-MM-DD"),moment("2014-03-03", "YYYY-MM-DD"),moment("2014-03-06", "YYYY-MM-DD"),moment("2014-04-06", "YYYY-MM-DD"),moment("2014-08-27", "YYYY-MM-DD"),moment("2014-10-25", "YYYY-MM-DD"),moment("2014-10-29", "YYYY-MM-DD"),moment("2014-10-31", "YYYY-MM-DD"),moment("2014-11-01", "YYYY-MM-DD"),moment("2014-11-08", "YYYY-MM-DD"),moment("2014-11-10", "YYYY-MM-DD"),moment("2014-11-16", "YYYY-MM-DD"),moment("2014-11-18", "YYYY-MM-DD"),moment("2014-11-19", "YYYY-MM-DD"),moment("2014-11-22", "YYYY-MM-DD"),moment("2014-11-23", "YYYY-MM-DD"),moment("2014-11-25", "YYYY-MM-DD"),moment("2014-12-01", "YYYY-MM-DD"),moment("2014-12-03", "YYYY-MM-DD"),moment("2014-12-06", "YYYY-MM-DD"),moment("2014-12-15", "YYYY-MM-DD"),moment("2014-12-23", "YYYY-MM-DD"),moment("2014-12-24", "YYYY-MM-DD"),moment("2014-12-26", "YYYY-MM-DD"),moment("2014-12-28", "YYYY-MM-DD"),moment("2015-01-08", "YYYY-MM-DD"),moment("2015-01-16", "YYYY-MM-DD"),moment("2015-01-21", "YYYY-MM-DD"),moment("2015-01-24", "YYYY-MM-DD"),moment("2015-01-26", "YYYY-MM-DD"),moment("2015-01-29", "YYYY-MM-DD"),moment("2015-02-02", "YYYY-MM-DD"),moment("2015-02-03", "YYYY-MM-DD"),moment("2015-02-05", "YYYY-MM-DD"),moment("2015-02-11", "YYYY-MM-DD"),moment("2015-02-16", "YYYY-MM-DD"),moment("2015-02-26", "YYYY-MM-DD"),moment("2015-02-28", "YYYY-MM-DD"),moment("2015-03-05", "YYYY-MM-DD"),moment("2015-03-07", "YYYY-MM-DD"),moment("2015-03-10", "YYYY-MM-DD"),moment("2015-03-13", "YYYY-MM-DD"),moment("2015-03-15", "YYYY-MM-DD"),moment("2015-03-29", "YYYY-MM-DD"),moment("2015-03-30", "YYYY-MM-DD"),moment("2015-04-02", "YYYY-MM-DD"),moment("2015-04-10", "YYYY-MM-DD"),moment("2015-04-12", "YYYY-MM-DD"),moment("2015-04-13", "YYYY-MM-DD"),moment("2015-04-25", "YYYY-MM-DD"),moment("2015-06-04", "YYYY-MM-DD"),moment("2015-06-20", "YYYY-MM-DD"),moment("2015-06-30", "YYYY-MM-DD")],
    datasets: [{ 
        data: [ 1566,  1823,  2368,  2867,  3319,  3421,  6876,  6869,  7676,
                8258,  8423,  9697, 15814, 18278, 18379, 18539, 18676, 17412,
               17636, 18988, 19234, 18926, 18589, 18203, 18172, 18570, 18509,
               18989, 19343, 19038, 18093, 17849, 18143, 18471, 18690, 19345,
               19484, 19595, 18963, 19929, 20379, 20182, 20397, 20645, 20842,
               20899, 21361, 21318, 21600, 21613, 20884, 24324, 22330, 21529,
               25009, 25426, 26222, 24659, 25650, 26860, 26602],
        label: "Number Of Products",
        borderColor: "#3e95cd",
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number of products listed on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {

      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'top',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});

var nbProductsZoom = false

function nbProductsScale() {
  if (nbProductsZoom) {
    nbProductsChart.options.scales.xAxes[0].time.min = nbProductsChart.data.labels[0];
    nbProductsChart.options.scales.xAxes[0].time.max = nbProductsChart.data.labels[-1];
    nbProductsChart.options.scales.yAxes[0].ticks.max = 30000;
    nbProductsChart.options.scales.yAxes[0].ticks.min = 0;
    nbProductsChart.update();
    nbProductsZoom = false
  } else {
    nbProductsChart.options.scales.xAxes[0].time.min = moment('2014-10-01', "YYYY-MM-DD");
    nbProductsChart.options.scales.xAxes[0].time.max = moment('2014-12-01', "YYYY-MM-DD");
    nbProductsChart.options.scales.yAxes[0].ticks.max = 19500;
    nbProductsChart.options.scales.yAxes[0].ticks.min = 16500;

    nbProductsChart.update();
    nbProductsZoom = true
  }
}
nbProductsScale()

/**
 *    Price
 */
var ctx = document.getElementById('priceListing_chart').getContext('2d');

var priceChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [moment("2014-01-01", "YYYY-MM-DD"),moment("2014-01-09", "YYYY-MM-DD"),moment("2014-01-16", "YYYY-MM-DD"),moment("2014-01-26", "YYYY-MM-DD"),moment("2014-02-02", "YYYY-MM-DD"),moment("2014-02-05", "YYYY-MM-DD"),moment("2014-02-23", "YYYY-MM-DD"),moment("2014-02-24", "YYYY-MM-DD"),moment("2014-02-28", "YYYY-MM-DD"),moment("2014-03-03", "YYYY-MM-DD"),moment("2014-03-06", "YYYY-MM-DD"),moment("2014-04-06", "YYYY-MM-DD"),moment("2014-08-27", "YYYY-MM-DD"),moment("2014-10-25", "YYYY-MM-DD"),moment("2014-10-29", "YYYY-MM-DD"),moment("2014-10-31", "YYYY-MM-DD"),moment("2014-11-01", "YYYY-MM-DD"),moment("2014-11-08", "YYYY-MM-DD"),moment("2014-11-10", "YYYY-MM-DD"),moment("2014-11-16", "YYYY-MM-DD"),moment("2014-11-18", "YYYY-MM-DD"),moment("2014-11-19", "YYYY-MM-DD"),moment("2014-11-22", "YYYY-MM-DD"),moment("2014-11-23", "YYYY-MM-DD"),moment("2014-11-25", "YYYY-MM-DD"),moment("2014-12-01", "YYYY-MM-DD"),moment("2014-12-03", "YYYY-MM-DD"),moment("2014-12-06", "YYYY-MM-DD"),moment("2014-12-15", "YYYY-MM-DD"),moment("2014-12-23", "YYYY-MM-DD"),moment("2014-12-24", "YYYY-MM-DD"),moment("2014-12-26", "YYYY-MM-DD"),moment("2014-12-28", "YYYY-MM-DD"),moment("2015-01-08", "YYYY-MM-DD"),moment("2015-01-16", "YYYY-MM-DD"),moment("2015-01-21", "YYYY-MM-DD"),moment("2015-01-24", "YYYY-MM-DD"),moment("2015-01-26", "YYYY-MM-DD"),moment("2015-01-29", "YYYY-MM-DD"),moment("2015-02-02", "YYYY-MM-DD"),moment("2015-02-03", "YYYY-MM-DD"),moment("2015-02-05", "YYYY-MM-DD"),moment("2015-02-11", "YYYY-MM-DD"),moment("2015-02-16", "YYYY-MM-DD"),moment("2015-02-26", "YYYY-MM-DD"),moment("2015-02-28", "YYYY-MM-DD"),moment("2015-03-05", "YYYY-MM-DD"),moment("2015-03-07", "YYYY-MM-DD"),moment("2015-03-10", "YYYY-MM-DD"),moment("2015-03-13", "YYYY-MM-DD"),moment("2015-03-15", "YYYY-MM-DD"),moment("2015-03-29", "YYYY-MM-DD"),moment("2015-03-30", "YYYY-MM-DD"),moment("2015-04-02", "YYYY-MM-DD"),moment("2015-04-10", "YYYY-MM-DD"),moment("2015-04-12", "YYYY-MM-DD"),moment("2015-04-13", "YYYY-MM-DD"),moment("2015-04-25", "YYYY-MM-DD"),moment("2015-06-04", "YYYY-MM-DD"),moment("2015-06-20", "YYYY-MM-DD"),moment("2015-06-30", "YYYY-MM-DD")],
    datasets: [{ 
        data: [ 1566,  1823,  2368,  2867,  3319,  3421,  6876,  6869,  7676,
                8258,  8423,  9697, 15814, 18278, 18379, 18539, 18676, 17412,
               17636, 18988, 19234, 18926, 18589, 18203, 18172, 18570, 18509,
               18989, 19343, 19038, 18093, 17849, 18143, 18471, 18690, 19345,
               19484, 19595, 18963, 19929, 20379, 20182, 20397, 20645, 20842,
               20899, 21361, 21318, 21600, 21613, 20884, 24324, 22330, 21529,
               25009, 25426, 26222, 24659, 25650, 26860, 26602],
        label: "Number Of Products",
        borderColor: "#3e95cd",
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number of products listed on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {

      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'top',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});

var priceZoom = false

function priceScale() {
  if (priceZoom) {
    priceChart.options.scales.xAxes[0].time.min = priceChart.data.labels[0];
    priceChart.options.scales.xAxes[0].time.max = priceChart.data.labels[-1];
    priceChart.options.scales.yAxes[0].ticks.max = 30000;
    priceChart.options.scales.yAxes[0].ticks.min = 0;
    priceChart.update();
    priceZoom = false
  } else {
    priceChart.options.scales.xAxes[0].time.min = moment('2014-10-01', "YYYY-MM-DD");
    priceChart.options.scales.xAxes[0].time.max = moment('2014-12-01', "YYYY-MM-DD");
    priceChart.options.scales.yAxes[0].ticks.max = 19500;
    priceChart.options.scales.yAxes[0].ticks.min = 16500;

    priceChart.update();
    priceZoom = true
  }
}
priceScale()

/**
 *    Mean number of products per vendor
 */
var ctx = document.getElementById('vendorsMeanListing_chart').getContext('2d');

var meanProductsChart = new Chart(ctx, {
  type: 'line',
  data: {
    
    labels: [moment("2014-01-01", "YYYY-MM-DD"),moment("2014-01-09", "YYYY-MM-DD"),moment("2014-01-16", "YYYY-MM-DD"),moment("2014-01-26", "YYYY-MM-DD"),moment("2014-02-02", "YYYY-MM-DD"),moment("2014-02-05", "YYYY-MM-DD"),moment("2014-02-23", "YYYY-MM-DD"),moment("2014-02-24", "YYYY-MM-DD"),moment("2014-02-28", "YYYY-MM-DD"),moment("2014-03-03", "YYYY-MM-DD"),moment("2014-03-06", "YYYY-MM-DD"),moment("2014-04-06", "YYYY-MM-DD"),moment("2014-08-27", "YYYY-MM-DD"),moment("2014-10-25", "YYYY-MM-DD"),moment("2014-10-29", "YYYY-MM-DD"),moment("2014-10-31", "YYYY-MM-DD"),moment("2014-11-01", "YYYY-MM-DD"),moment("2014-11-08", "YYYY-MM-DD"),moment("2014-11-10", "YYYY-MM-DD"),moment("2014-11-16", "YYYY-MM-DD"),moment("2014-11-18", "YYYY-MM-DD"),moment("2014-11-19", "YYYY-MM-DD"),moment("2014-11-22", "YYYY-MM-DD"),moment("2014-11-23", "YYYY-MM-DD"),moment("2014-11-25", "YYYY-MM-DD"),moment("2014-12-01", "YYYY-MM-DD"),moment("2014-12-03", "YYYY-MM-DD"),moment("2014-12-06", "YYYY-MM-DD"),moment("2014-12-15", "YYYY-MM-DD"),moment("2014-12-23", "YYYY-MM-DD"),moment("2014-12-24", "YYYY-MM-DD"),moment("2014-12-26", "YYYY-MM-DD"),moment("2014-12-28", "YYYY-MM-DD"),moment("2015-01-08", "YYYY-MM-DD"),moment("2015-01-16", "YYYY-MM-DD"),moment("2015-01-21", "YYYY-MM-DD"),moment("2015-01-24", "YYYY-MM-DD"),moment("2015-01-26", "YYYY-MM-DD"),moment("2015-01-29", "YYYY-MM-DD"),moment("2015-02-02", "YYYY-MM-DD"),moment("2015-02-03", "YYYY-MM-DD"),moment("2015-02-05", "YYYY-MM-DD"),moment("2015-02-11", "YYYY-MM-DD"),moment("2015-02-16", "YYYY-MM-DD"),moment("2015-02-26", "YYYY-MM-DD"),moment("2015-02-28", "YYYY-MM-DD"),moment("2015-03-05", "YYYY-MM-DD"),moment("2015-03-07", "YYYY-MM-DD"),moment("2015-03-10", "YYYY-MM-DD"),moment("2015-03-13", "YYYY-MM-DD"),moment("2015-03-15", "YYYY-MM-DD"),moment("2015-03-29", "YYYY-MM-DD"),moment("2015-03-30", "YYYY-MM-DD"),moment("2015-04-02", "YYYY-MM-DD"),moment("2015-04-10", "YYYY-MM-DD"),moment("2015-04-12", "YYYY-MM-DD"),moment("2015-04-13", "YYYY-MM-DD"),moment("2015-04-25", "YYYY-MM-DD"),moment("2015-06-04", "YYYY-MM-DD"),moment("2015-06-20", "YYYY-MM-DD"),moment("2015-06-30", "YYYY-MM-DD")],
    datasets: [{ 
        data: [11.125     , 11.40776699, 13.39655172, 13.53676471, 13.68125   ,
               13.30952381, 11.78658537, 11.86666667, 12.06878307, 12.04926108,
               11.8125    , 12.40740741, 17.19703104, 17.34863388, 17.14224599,
               17.19532909, 17.44633369, 18.43463303, 18.47520185, 19.76213018,
               19.9147929 , 19.54231228, 19.36231884, 19.57214555, 19.4931164 ,
               19.67790262, 19.31795511, 20.14030612, 20.31362468, 21.74498567,
               21.43198804, 22.02799378, 22.23088924, 21.20375723, 21.21044993,
               21.55587393, 21.57514451, 21.40401146, 20.88311688, 21.20893372,
               21.57939914, 21.70682148, 21.77138643, 22.68318318, 23.10939908,
               23.10138249, 23.60188088, 23.88309637, 23.70957614, 23.52283465,
               23.28217822, 23.82380216, 23.67005076, 22.96119929, 24.91162029,
               25.19124797, 25.39302694, 24.97094017, 26.33870968, 26.8994614 ,
               26.68959108],
        label: "Sellers who stayed",
        borderColor: "#e55039",
        fill: false
      },
      { 
        data: [10.04166667,  9.65079365,  9.82051282,  9.74747475,  9.25663717,
                9.33333333,  9.59922179,  9.70300752,  9.57337884, 10.07666667,
               10.05144695,  9.82334385,  8.74242424,  7.76649746,  7.80851064,
                7.46703297,  7.0960452 ,  3.5       , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0         , 0          , 0          , 0          , 0          ,
                0],
        label: "sellers who have retired",
        borderColor: "#38ada9",
        fill: false
      },
      { 
        data: [10.74264706, 10.74096386, 11.95876289, 11.94042553, 11.84981685,
               11.67719298, 10.82564103, 10.92471358, 10.97913562, 11.21104816,
               11.05914718, 11.38729763, 14.9761194 , 15.65107914, 15.57969724,
               15.62010676, 15.71453901, 17.63879957, 17.63578275, 18.36091003,
               18.4438723 , 18.13312693, 17.85935884, 17.9733191 , 17.84272051,
               18.30835118, 17.99051633, 18.4577167 , 18.93524416, 19.98864926,
               19.84934757, 20.20418204, 20.33536585, 19.03837719, 19.12091503,
               19.14074074, 19.14315789, 18.98336798, 18.74452555, 18.88061224,
               19.3244898 , 19.45764463, 19.50103306, 19.94264859, 19.97001034,
               20.07892004, 20.50052138, 20.70991561, 20.79810726, 20.68310598,
               20.62350381, 20.48832866, 20.31344793, 19.83991684, 21.03849765,
               21.08449396, 21.20144535, 21.40349176, 22.14327485, 21.81529851,
               21.08127854],
        label: "All sellers",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {

    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number of products listed on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'top',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});

var meanProductsZoom = false
function meanProductsScale() {
  if (meanProductsZoom) {
    meanProductsChart.options.scales.xAxes[0].time.min = meanProductsChart.data.labels[0];
    meanProductsChart.options.scales.xAxes[0].time.max = meanProductsChart.data.labels[-1];
    meanProductsChart.options.scales.yAxes[0].ticks.max = 30;
    meanProductsChart.update();
    meanProductsZoom = false
  } else {
    meanProductsChart.options.scales.xAxes[0].time.min = moment('2014-10-01', "YYYY-MM-DD");
    meanProductsChart.options.scales.xAxes[0].time.max = moment('2015-02-21', "YYYY-MM-DD");
    meanProductsChart.options.scales.yAxes[0].ticks.min = 5;
    meanProductsChart.options.scales.yAxes[0].ticks.max = 24;

    meanProductsChart.update();
    meanProductsZoom = true
  }
}

/**
 *    Number Of New Vendors
 */
var ctx = document.getElementById('newVendors_chart').getContext('2d');

var newVendors_chart = new Chart(ctx, {
  type: 'line',
  data: {
    
    labels: [moment('2014-01-09', "YYYY-MM-DD"), moment('2014-01-16', "YYYY-MM-DD"), moment('2014-01-26', "YYYY-MM-DD"),
               moment('2014-02-02', "YYYY-MM-DD"), moment('2014-02-05', "YYYY-MM-DD"), moment('2014-02-23', "YYYY-MM-DD"), moment('2014-02-24', "YYYY-MM-DD"),
               moment('2014-02-28', "YYYY-MM-DD"), moment('2014-03-03', "YYYY-MM-DD"), moment('2014-03-06', "YYYY-MM-DD"), moment('2014-04-06', "YYYY-MM-DD"),
               moment('2014-08-27', "YYYY-MM-DD"), moment('2014-10-25', "YYYY-MM-DD"), moment('2014-10-29', "YYYY-MM-DD"), moment('2014-10-31', "YYYY-MM-DD"),
               moment('2014-11-01', "YYYY-MM-DD"), moment('2014-11-08', "YYYY-MM-DD"), moment('2014-11-10', "YYYY-MM-DD"), moment('2014-11-16', "YYYY-MM-DD"),
               moment('2014-11-18', "YYYY-MM-DD"), moment('2014-11-19', "YYYY-MM-DD"), moment('2014-11-22', "YYYY-MM-DD"), moment('2014-11-23', "YYYY-MM-DD"),
               moment('2014-11-25', "YYYY-MM-DD"), moment('2014-12-01', "YYYY-MM-DD"), moment('2014-12-03', "YYYY-MM-DD"), moment('2014-12-06', "YYYY-MM-DD"),
               moment('2014-12-15', "YYYY-MM-DD"), moment('2014-12-23', "YYYY-MM-DD"), moment('2014-12-24', "YYYY-MM-DD"), moment('2014-12-26', "YYYY-MM-DD"),
               moment('2014-12-28', "YYYY-MM-DD"), moment('2015-01-08', "YYYY-MM-DD"), moment('2015-01-16', "YYYY-MM-DD"), moment('2015-01-21', "YYYY-MM-DD"),
               moment('2015-01-24', "YYYY-MM-DD"), moment('2015-01-26', "YYYY-MM-DD"), moment('2015-01-29', "YYYY-MM-DD"), moment('2015-02-02', "YYYY-MM-DD"),
               moment('2015-02-03', "YYYY-MM-DD"), moment('2015-02-05', "YYYY-MM-DD"), moment('2015-02-11', "YYYY-MM-DD"), moment('2015-02-16', "YYYY-MM-DD"),
               moment('2015-02-26', "YYYY-MM-DD"), moment('2015-02-28', "YYYY-MM-DD"), moment('2015-03-05', "YYYY-MM-DD"), moment('2015-03-07', "YYYY-MM-DD"),
               moment('2015-03-10', "YYYY-MM-DD"), moment('2015-03-13', "YYYY-MM-DD"), moment('2015-03-15', "YYYY-MM-DD"), moment('2015-03-29', "YYYY-MM-DD"),
               moment('2015-03-30', "YYYY-MM-DD"), moment('2015-04-02', "YYYY-MM-DD"), moment('2015-04-10', "YYYY-MM-DD"), moment('2015-04-12', "YYYY-MM-DD"),
               moment('2015-04-13', "YYYY-MM-DD"), moment('2015-04-25', "YYYY-MM-DD"), moment('2015-06-04', "YYYY-MM-DD"), moment('2015-06-20', "YYYY-MM-DD"),
               moment('2015-06-30', "YYYY-MM-DD")],
    datasets: [{ 
        data: [70.38888889,  4.76388889,  4.55681818,  5.18181818,
        5.125     , 10.33552632, 17.71052632, 17.3       , 14.05      ,
       11.375     ,  7.84375   ,  4.32638889,  3.52430556,  4.71666667,
        5.13333333,  5.33333333,  6.4375    ,  6.4375    ,  7.35714286,
        5.69047619,  5.58333333,  6.        ,  2.75      ,  1.66666667,
        1.30952381,  3.14285714,  5.5       ,  4.4       ,  3.01111111,
        2.61111111,  1.66666667,  2.16666667,  3.625     ,  3.79166667,
        3.25      ,  4.95833333,  4.70833333,  2.95833333,  4.325     ,
        2.95      ,  0.91666667,  1.80952381,  3.05952381,  3.96212121,
        3.87878788,  3.25      ,  3.25      ,  2.70833333,  2.5       ,
        2.625     ,  5.06666667,  4.31666667,  1.        ,  4.75      ,
        6.16666667,  5.91666667,  4.48076923,  2.1575985 ,  4.13271162,
        6.70588235],
        label: "Number Of Suppliers",
        borderColor: "#3e95cd",
        fill: true
      }
    ]
  },
  options: {
    responsive: true,

    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number of new suppliers with at least one product listed on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
          
        }]
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'top',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }
      }]
    },
    plugins: {
      zoom: {
        zoom: {
          enabled: false,
          mode: 'x',
          sensitivity: 3
        }
      }
    }
  }
});
var newVendorZoom = false
function newVendorScale() {
  if (newVendorZoom) {
    newVendors_chart.options.scales.xAxes[0].time.min = newVendors_chart.data.labels[0];
    newVendors_chart.options.scales.xAxes[0].time.max = newVendors_chart.data.labels[-1];
    newVendors_chart.options.scales.yAxes[0].ticks.max = 80;
    newVendors_chart.update();
    newVendorZoom = false
  } else {
    newVendors_chart.options.scales.xAxes[0].time.min = moment('2014-10-01', "YYYY-MM-DD");
    newVendors_chart.options.scales.xAxes[0].time.max = moment('2015-02-21', "YYYY-MM-DD");
    newVendors_chart.options.scales.yAxes[0].ticks.max = 10;

    newVendors_chart.update();
    newVendorZoom = true
  }
}


/* DONUT Vendors*/
let dados = {
    datasets: [{
        // cria-se um vetor data, com os valores a ser dispostos no gráfico
        data: [10, 20, 30],
        // cria-se uma propriedade para adicionar cores aos respectivos valores do vetor data
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)']
    }],
    // cria-se legendas para os respectivos valores do vetor data
    labels: ['Vermelho', 'Amarelo', 'Azul']
};

let opcoes = {
    cutoutPercentage: 40,
};

var ctx = document.getElementById('donutAfter_chart').getContext('2d');

let meuDonutAfterChart = new Chart(ctx, {
    type: 'doughnut',
    data: dados,
    options: opcoes
});

var ctx = document.getElementById('donutBefore_chart').getContext('2d');

let meuDonutBeforeChart = new Chart(ctx, {
    type: 'doughnut',
    data: dados,
    options: opcoes
});

/**
 *    Vendors
 */
var ctx = document.getElementById('numberOfActiveVendors_chart').getContext('2d');

var activeVendorChart = new Chart(ctx, {
  type: 'line',
  data: {
    responsive:true,
    labels: [moment('2014-01-09', "YYYY-MM-DD"), moment('2014-01-16', "YYYY-MM-DD"), moment('2014-01-26', "YYYY-MM-DD"), moment('2014-02-02', "YYYY-MM-DD"),
               moment('2014-02-05', "YYYY-MM-DD"), moment('2014-02-23', "YYYY-MM-DD"), moment('2014-02-24', "YYYY-MM-DD"), moment('2014-02-28', "YYYY-MM-DD"),
               moment('2014-03-03', "YYYY-MM-DD"), moment('2014-03-06', "YYYY-MM-DD"), moment('2014-04-06', "YYYY-MM-DD"), moment('2014-08-27', "YYYY-MM-DD"),
               moment('2014-10-25', "YYYY-MM-DD"), moment('2014-10-29', "YYYY-MM-DD"), moment('2014-10-31', "YYYY-MM-DD"), moment('2014-11-01', "YYYY-MM-DD"),
               moment('2014-11-08', "YYYY-MM-DD"), moment('2014-11-10', "YYYY-MM-DD"), moment('2014-11-16', "YYYY-MM-DD"), moment('2014-11-18', "YYYY-MM-DD"),
               moment('2014-11-19', "YYYY-MM-DD"), moment('2014-11-22', "YYYY-MM-DD"), moment('2014-11-23', "YYYY-MM-DD"), moment('2014-11-25', "YYYY-MM-DD"),
               moment('2014-12-01', "YYYY-MM-DD"), moment('2014-12-03', "YYYY-MM-DD"), moment('2014-12-06', "YYYY-MM-DD"), moment('2014-12-15', "YYYY-MM-DD"),
               moment('2014-12-23', "YYYY-MM-DD"), moment('2014-12-24', "YYYY-MM-DD"), moment('2014-12-26', "YYYY-MM-DD"), moment('2014-12-28', "YYYY-MM-DD"),
               moment('2015-01-08', "YYYY-MM-DD"), moment('2015-01-16', "YYYY-MM-DD"), moment('2015-01-21', "YYYY-MM-DD"), moment('2015-01-24', "YYYY-MM-DD"),
               moment('2015-01-26', "YYYY-MM-DD"), moment('2015-01-29', "YYYY-MM-DD"), moment('2015-02-02', "YYYY-MM-DD"), moment('2015-02-03', "YYYY-MM-DD"),
               moment('2015-02-05', "YYYY-MM-DD"), moment('2015-02-11', "YYYY-MM-DD"), moment('2015-02-16', "YYYY-MM-DD"), moment('2015-02-26', "YYYY-MM-DD"),
               moment('2015-02-28', "YYYY-MM-DD"), moment('2015-03-05', "YYYY-MM-DD"), moment('2015-03-07', "YYYY-MM-DD"), moment('2015-03-10', "YYYY-MM-DD"),
               moment('2015-03-13', "YYYY-MM-DD"), moment('2015-03-15', "YYYY-MM-DD"), moment('2015-03-29', "YYYY-MM-DD"), moment('2015-03-30', "YYYY-MM-DD"),
               moment('2015-04-02', "YYYY-MM-DD"), moment('2015-04-10', "YYYY-MM-DD"), moment('2015-04-12', "YYYY-MM-DD"), moment('2015-04-13', "YYYY-MM-DD"),
               moment('2015-04-25', "YYYY-MM-DD"), moment('2015-06-04', "YYYY-MM-DD"), moment('2015-06-20', "YYYY-MM-DD"), moment('2015-06-30', "YYYY-MM-DD")],
    datasets: [{ 
        data: [ 166,  194,  235,  273,  285,  585,  611,  671,  706,  727,  803,
               1005, 1111, 1123, 1124, 1127,  933,  939,  967,  971,  969,  967,
                937,  941,  933,  949,  946,  942,  881,  843,  813,  820,  912,
                918,  945,  950,  962,  959,  980,  980,  968,  968,  959,  967,
                963,  959,  948,  951,  953,  919, 1071,  989,  962, 1065, 1077,
               1107, 1031, 1026, 1071, 1095],
        label: "Number Of Active Vendors",
        borderColor: "#3e95cd",
        fill: true
      }
    ]
  },
  options: {

    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Number Of Active Vendors on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
            
        }]
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'bottom',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    }
  }
});

var activeVendorZoom = false
function activeVendorScale() {
  if (activeVendorZoom) {
    activeVendorChart.options.scales.xAxes[0].time.min = activeVendorChart.data.labels[0];
    activeVendorChart.options.scales.xAxes[0].time.max = activeVendorChart.data.labels[-1];
    activeVendorChart.options.scales.yAxes[0].ticks.min = 0;

    activeVendorChart.update();
    activeVendorZoom = false
  } else {
    activeVendorChart.options.scales.xAxes[0].time.min = moment('2014-08-20', "YYYY-MM-DD");
    activeVendorChart.options.scales.xAxes[0].time.max = moment('2015-01-16', "YYYY-MM-DD");
    activeVendorChart.options.scales.yAxes[0].ticks.min = 600;

    activeVendorChart.update();
    activeVendorZoom = true
  }
}
activeVendorScale()

/**
 *    Categories
 */
var ctx = document.getElementById('categories_chart').getContext('2d');

var categoriesChart = new Chart(ctx, {
  type: 'line',
  data: {
    responsive:true,
    labels: [moment('2014-01-01', "YYYY-MM-DD"), moment('2014-01-09', "YYYY-MM-DD"), moment('2014-01-16', "YYYY-MM-DD"), moment('2014-01-26', "YYYY-MM-DD"), moment('2014-02-02', "YYYY-MM-DD"),
               moment('2014-02-05', "YYYY-MM-DD"), moment('2014-02-23', "YYYY-MM-DD"), moment('2014-02-24', "YYYY-MM-DD"), moment('2014-02-28', "YYYY-MM-DD"),
               moment('2014-03-03', "YYYY-MM-DD"), moment('2014-03-06', "YYYY-MM-DD"), moment('2014-04-06', "YYYY-MM-DD"), moment('2014-08-27', "YYYY-MM-DD"),
               moment('2014-10-25', "YYYY-MM-DD"), moment('2014-10-29', "YYYY-MM-DD"), moment('2014-10-31', "YYYY-MM-DD"), moment('2014-11-01', "YYYY-MM-DD"),
               moment('2014-11-08', "YYYY-MM-DD"), moment('2014-11-10', "YYYY-MM-DD"), moment('2014-11-16', "YYYY-MM-DD"), moment('2014-11-18', "YYYY-MM-DD"),
               moment('2014-11-19', "YYYY-MM-DD"), moment('2014-11-22', "YYYY-MM-DD"), moment('2014-11-23', "YYYY-MM-DD"), moment('2014-11-25', "YYYY-MM-DD"),
               moment('2014-12-01', "YYYY-MM-DD"), moment('2014-12-03', "YYYY-MM-DD"), moment('2014-12-06', "YYYY-MM-DD"), moment('2014-12-15', "YYYY-MM-DD"),
               moment('2014-12-23', "YYYY-MM-DD"), moment('2014-12-24', "YYYY-MM-DD"), moment('2014-12-26', "YYYY-MM-DD"), moment('2014-12-28', "YYYY-MM-DD"),
               moment('2015-01-08', "YYYY-MM-DD"), moment('2015-01-16', "YYYY-MM-DD"), moment('2015-01-21', "YYYY-MM-DD"), moment('2015-01-24', "YYYY-MM-DD"),
               moment('2015-01-26', "YYYY-MM-DD"), moment('2015-01-29', "YYYY-MM-DD"), moment('2015-02-02', "YYYY-MM-DD"), moment('2015-02-03', "YYYY-MM-DD"),
               moment('2015-02-05', "YYYY-MM-DD"), moment('2015-02-11', "YYYY-MM-DD"), moment('2015-02-16', "YYYY-MM-DD"), moment('2015-02-26', "YYYY-MM-DD"),
               moment('2015-02-28', "YYYY-MM-DD"), moment('2015-03-05', "YYYY-MM-DD"), moment('2015-03-07', "YYYY-MM-DD"), moment('2015-03-10', "YYYY-MM-DD"),
               moment('2015-03-13', "YYYY-MM-DD"), moment('2015-03-15', "YYYY-MM-DD"), moment('2015-03-29', "YYYY-MM-DD"), moment('2015-03-30', "YYYY-MM-DD"),
               moment('2015-04-02', "YYYY-MM-DD"), moment('2015-04-10', "YYYY-MM-DD"), moment('2015-04-12', "YYYY-MM-DD"), moment('2015-04-13', "YYYY-MM-DD"),
               moment('2015-04-25', "YYYY-MM-DD"), moment('2015-06-04', "YYYY-MM-DD"), moment('2015-06-20', "YYYY-MM-DD"), moment('2015-06-30', "YYYY-MM-DD")],
    datasets: [
      {
        data: [ 1160.,  1332.,  1691.,  2043.,  2299.,  2372.,  5378.,  5316.,
                5876.,  6420.,  6551.,  7533., 11831., 13876., 13873., 14135.,
               14136., 12994., 13254., 13527., 13585., 13192., 12900., 12345.,
               12331., 12692., 12729., 12908., 13293., 12936., 12200., 11865.,
               11986., 13271., 13513., 13925., 13975., 14133., 13904., 14229.,
               14339., 14450., 14663., 14540., 14909., 14667., 15168., 15023.,
               14832., 14832., 13854., 16264., 15299., 14838., 16494., 16999.,
               17499., 15883., 16771., 17008., 16705.],

        label: "Drugs",
        borderColor: "#6c5ce7",
        backgroundColor: "#6c5ce7",
        fill: 'origin'
      },
      { 
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0,  1.,  3.,  3., 18., 22., 18.,
               16., 16., 30., 29., 30., 32., 11., 56., 53.],
        label: "Chemicals",
        borderColor: "#d63031",
        backgroundColor: "#d63031",
        fill: '-1'
      },
      {
        data: [  31.,   40.,   45.,   68.,  118.,  122.,  173.,  170.,  169.,
                150.,  152.,  197.,  641.,  697.,  692.,  695.,  698.,  591.,
                591.,  693.,  727.,  723.,  769.,  768.,  762.,  758.,  759.,
                831.,  838.,  843.,  823.,  789.,  825.,  890.,  882.,  915.,
                910.,  880.,  763.,  735.,  855.,  830.,  878.,  890.,  803.,
                797.,  919.,  924.,  952.,  936.,  969., 1022.,  936.,  908.,
               1054., 1059., 1073., 1044., 1076., 1144., 1190.],

        label: "Counterfeits",
        borderColor: "#fdcb6e",
        backgroundColor: "#fdcb6e",
        fill: '-2'
      },
      {
        data: [  42.,   47.,   52.,   76.,   60.,   68.,  174.,  187.,  210.,
                257.,  251.,  300.,  430.,  496.,  502.,  415.,  519.,  522.,
                528.,  570.,  687.,  724.,  587.,  737.,  686.,  711.,  562.,
                745.,  734.,  768.,  763.,  765.,  798.,  622.,  588.,  627.,
                626.,  623.,  514.,  660.,  661.,  662.,  631.,  671.,  676.,
                680.,  693.,  669.,  815.,  864.,  882., 1040.,  948.,  950.,
               1078., 1066., 1113., 1223., 1270., 1332., 1292.],

        label: "Data",
        borderColor: "#636e72",
        backgroundColor: "#636e72",
        fill: '-3'
      },
      {
        data: [  4.,   4.,   8.,  11.,  11.,   8.,   6.,   5.,  12.,  16.,  20.,
                21., 119., 152., 158., 165., 160., 171., 173., 168., 166., 168.,
               187., 186., 194., 180., 205., 209., 216., 245., 240., 254., 258.,
               270., 273., 275., 279., 223., 284., 285., 285., 283., 241., 272.,
               281., 277., 286., 286., 291., 291., 295., 332., 331., 324., 344.,
               350., 352., 359., 389., 426., 465.],

        label: "Drugs Paraphernalia",
        borderColor: "#fd79a8",
        backgroundColor: "#fd79a8",
        fill: '-4'
      },
      
      {
        data: [ 0,  0,  0,  0,  0,  0,  11.,  19.,  65.,  57.,  76.,
                68.,  80., 147., 153., 156., 160., 158., 158., 161., 158., 159.,
               163., 169., 179., 154., 186., 166., 131., 130., 130., 130., 122.,
               141., 133., 135., 132., 135., 107., 135., 135., 140., 131., 129.,
               146., 148., 143., 147., 145.,  90., 157., 170., 152., 120., 167.,
               167., 170., 174., 170., 204., 207.],

        label: "Electronics",
        borderColor: "#2d3436",
        backgroundColor: "#2d3436",
        fill: '-5'
      },
      {
        data: [ 20.,  28.,  40.,  51.,  53.,  58., 115., 114., 137., 147., 149.,
               162., 245., 276., 281., 254., 283., 307., 282., 306., 323., 327.,
               328., 324., 332., 342., 344., 370., 366., 364., 363., 363., 377.,
               346., 353., 357., 380., 398., 422., 445., 446., 436., 398., 368.,
               401., 401., 369., 371., 425., 427., 402., 439., 412., 382., 428.,
               420., 424., 441., 358., 355., 355.],

        label: "Forgeries",
        borderColor: "#55efc4",
        backgroundColor: "#55efc4",
        fill: '-6'
      },
      {
        data: [ 241.,  276.,  452.,  465.,  576.,  576.,  662.,  677.,  746.,
                721.,  724.,  838., 1294., 1486., 1561., 1550., 1537., 1526.,
               1578., 1957., 1960., 1993., 1975., 1999., 2001., 1998., 1974.,
               2002., 2006., 2003., 1912., 1956., 2030., 1766., 1756., 1874.,
               1919., 1945., 1744., 2145., 2362., 2361., 2395., 2471., 2606.,
               2611., 2484., 2573., 2742., 2886., 2997., 3444., 2679., 2687.,
               3766., 3724., 3805., 3776., 3707., 4217., 4082.],

        label: "Information",
        borderColor: "#74b9ff",
        backgroundColor: "#74b9ff",
        fill: '-7'
      },
      {
        data: [  2.,   2.,  0,  0,  0,  0,   2.,  13.,   6.,   6.,  13.,
                12., 133., 122., 122., 126., 126., 126.,  30., 123., 123., 123.,
               131., 130., 135., 136., 136., 136., 135., 129., 129., 130., 132.,
               128., 129., 133., 133., 120., 131., 130., 130., 130., 130., 131.,
               133., 133., 130., 130., 133.,  60.,  0, 122., 121., 122., 152.,
               152., 157., 156., 226., 272., 287.],

        label: "Jewelry",
        borderColor: "#dfe6e9",
        backgroundColor: "#dfe6e9",
        fill: '-8'
      },
      {
        data: [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
                14., 151., 157., 148., 151., 147., 163., 191., 389., 422., 433.,
               446., 446., 443., 453., 471., 477., 481., 480., 441., 473., 475.,
               243., 254., 262., 270., 280., 237., 300., 300.,  30., 304., 321.,
               329., 298., 331., 327., 341., 355., 354., 371., 364., 354., 406.,
               403., 406., 384., 434., 519., 614.],

        label: "Other",
        borderColor: "#e58e26",
        backgroundColor: "#e58e26",
        fill: '-9'
      },
      {
        data: [  51.,   78.,   58.,  121.,  131.,  129.,  226.,  236.,  309.,
                343.,  346.,  369.,  508.,  520.,  527.,  529.,  543.,  496.,
                490.,  736.,  724.,  723.,  723.,  724.,  743.,  774.,  781.,
                768.,  764.,  761.,  728.,  759.,  766.,  427.,  437.,  470.,
                483.,  482.,  478.,  484.,  485.,  479.,  476.,  472.,  167.,
                499.,  473.,  478.,  525.,  460.,  603.,  761.,  751.,  609.,
                773.,  738.,  872.,  878.,  973., 1016., 1010.],

        label: "Services",
        borderColor: "#8e44ad",
        backgroundColor: "#8e44ad",
        fill: '-10'
      },
      {
        data: [ 0,  0,   1.,  0,  44.,  44.,  44.,  44.,  47.,  47.,  47.,
                65., 247., 241., 251., 254., 254., 253., 253., 255., 255., 254.,
               256., 255., 256., 258., 261., 260., 259., 266., 258., 259., 259.,
               256., 258., 256., 253., 253., 254., 255., 255., 254.,  34., 260.,
               267., 267., 245., 267., 267., 268., 208., 210., 207., 105., 208.,
               209., 209., 200., 169., 204., 263.],

        label: "Tobacco",
        borderColor: "#c0392b",
        backgroundColor: "#c0392b",
        fill: '-11'
      },
      {
        data: [ 15.,  16.,  21.,  32.,  27.,  44.,  85.,  88.,  99.,  94.,  94.,
               118., 135., 108., 111., 109., 113., 105., 108., 103., 104., 107.,
               124., 120., 110., 114., 101., 117., 120., 113., 106., 106., 115.,
               111., 114., 116., 124., 123., 125., 126., 126., 127., 116., 120.,
               124., 121., 119., 120., 129., 126., 141., 131., 114., 114., 109.,
               110., 112., 109.,  96., 107.,  79.],

        label: "Weapons",
        borderColor: "#2c3e50",
        backgroundColor: "#2c3e50",
        fill: '-12'
      }
    ]
  },
  options: {
    
    maintainAspectRatio: false,
    elements: {
        point:{
            radius: 0
        }
    },
    title: {
      display: true,
      text: 'Number Of Active Vendors on Agora Market per day'
    },
    scales: {
        xAxes: [{
            type: 'time'
            
        }],
        yAxes: [{
          stacked: true,
        }]
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: moment("2014-11-05", "YYYY-MM-DD"),
        borderColor: 'red',
        borderWidth: 3,
        label: {
          backgroundColor: 'red',
          content: 'Onymous Operation',
          enabled: true,
          position:'bottom',
          yAdjust:0
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }

      }]
    },
    filler: {
        propagate: true
    }
  }
});

var categoriesZoom = false
function categoriesScale() {
  if (categoriesZoom) {
    categoriesChart.options.scales.xAxes[0].time.min = categoriesChart.data.labels[0];
    categoriesChart.options.scales.xAxes[0].time.max = categoriesChart.data.labels[-1];
    categoriesChart.options.scales.yAxes[0].ticks.min = 0;
    categoriesChart.options.scales.yAxes[0].ticks.max = 30000;

    categoriesChart.update();
    categoriesZoom = false
  } else {
    categoriesChart.options.scales.xAxes[0].time.min = moment('2014-08-20', "YYYY-MM-DD");
    categoriesChart.options.scales.xAxes[0].time.max = moment('2015-01-16', "YYYY-MM-DD");
    categoriesChart.options.scales.yAxes[0].ticks.min = 10000;
    categoriesChart.options.scales.yAxes[0].ticks.max = 20000;

    categoriesChart.update();
    categoriesZoom = true
  }
}

categoriesScale()


/* CHORD DIAGRAM*/
var margin = {left:20, top:20, right:290, bottom:300},
    width =  Math.min(window.innerWidth, 1000) - margin.left - margin.right, // more flexibility: Math.min(window.innerWidth, 1000)
    height =  Math.min(window.innerWidth, 1000) - margin.top - margin.bottom, // same: Math.min(window.innerWidth, 1000)
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.1;

  var names = ["America","Asia","Europe","Oceania", "Others", "Worldwide"],
    colors = [ "#083E77", "#342350", "#567235", "#8B161C", "#DF7C00"],
    opacityDefault = 0.8;

  var matrix_1 = [[1154.95652174,  450.13043478,  450.65217391,  450.69565217,
                   464.7826087 ],
                 [ 264.13043478,  262.43478261,  263.52173913,  262.43478261,
                   268.86956522],
                 [ 825.30434783,  824.69565217, 1281.7826087 ,  824.60869565,
                   977.43478261],
                 [  21.17391304,   21.17391304,   21.17391304,  219.73913043,
                    43.43478261],
                 [ 253.26086957,  249.91304348,  249.91304348,  260.30434783,
                   267.65217391]]; // Others


  var matrix_2 =[[3179.78688525, 1190.24590164, 1191.39344262, 1196.1147541 ,
                  1278.55737705],
                 [ 701.36065574,  700.40983607,  700.80327869,  699.70491803,
                   705.67213115],
                 [2160.24590164, 2156.13114754, 3072.16393443, 2157.31147541,
                  2535.37704918],
                 [  74.93442623,   74.90163934,   74.90163934,  795.26229508,
                   108.19672131],
                 [ 918.78688525,  914.81967213,  914.98360656,  949.55737705,
                  1019.50819672]];

  ////////////////////////////////////////////////////////////
  /////////// Create scale and layout functions //////////////
  ////////////////////////////////////////////////////////////

  var colors = d3.scaleOrdinal()
      .domain(d3.range(names.length))
    .range(colors);

  var chord = d3.chord()
    .padAngle(.15)
    .sortChords(d3.descending)

  var arc = d3.arc()
  .innerRadius(innerRadius*1.01)
  .outerRadius(outerRadius);

  var path = d3.ribbon().radius(innerRadius);

  function getDefaultLayout() {
      return d3.layout.chord()
      .padding(0.15)
      .sortChords(d3.descending);
  }  
  var last_layout; //store layout between updates
  var currentInfoContinent = 0; // store the continent on which displays info widget

  var g =d3.select("#chord-diagram").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + (width/2 + margin.left) + "," + (height/2 + margin.top) + ")")

////////////////////////////////////////////////////////////
////////////////////// Create SVG //////////////////////////
////////////////////////////////////////////////////////////
function updateChord(matrix){
  layout = getDefaultLayout(); //create a new layout object
  layout.matrix(matrix);

  /* Create/update "group" elements */
    var groupG = g.selectAll("g.group")
        .data(layout.groups(), function (d) {
            return d.index; 
            //use a key function in case the 
            //groups are sorted differently between updates
        });
    
    groupG.exit()
        .transition()
            .duration(1500)
            .attr("opacity", 0.5)
            .remove(); //remove after transitions are complete
    
    var newGroups = groupG.enter().append("g")
        .attr("class", "group");


    //create the arc paths and set the constant attributes
    //(those based on the group index, not on the value)
    newGroups.append("path")
        .attr("id", function (d) {
            return "group" + d.index;
            //using d.index and not i to maintain consistency
            //even if groups are sorted
        })
        .style("fill", function (d) {
            return colors(d.index);
        });
    
    //update the paths to match the layout
    groupG.select("path") 
        .transition()
            .duration(1500)
            .attr("opacity", 0.5) //optional, just to observe the transition
        .attrTween("d", arcTween( last_layout ))
            .transition().duration(100).attr("opacity", 1) //reset opacity
        ;
    
    //create the group labels
    newGroups.append("svg:text")
        .attr("xlink:href", function (d) {
            return "#group" + d.index;
        })
        .attr("dy", ".35em")
        .attr("color", "#fff")
        .text(function (d) {
            return names[d.index];
        });

    //position group labels to match layout
    groupG.select("text")
        .transition()
            .duration(1500)
            .attr("transform", function(d) {
                d.angle = (d.startAngle + d.endAngle) / 2;
                //store the midpoint angle in the data object
                
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" +
                    " translate(" + (innerRadius + 46) + ")" + 
                    (d.angle > Math.PI ? " rotate(180)" : " rotate(0)"); 
                //include the rotate zero so that transforms can be interpolated
            })
            .attr("text-anchor", function (d) {
                return d.angle > Math.PI ? "end" : "begin";
            });
    
    
    /* Create/update the chord paths */
    var chordPaths = g.selectAll("path.chord")
        .data(layout.chords(), chordKey );
            //specify a key function to match chords
            //between updates
        
    
    //create the new chord paths
    var newChords = chordPaths.enter()
        .append("path")
        .attr("class", "chord"); 
    

    //handle exiting paths:
    chordPaths.exit().transition()
        .duration(1500)
        .attr("opacity", opacityDefault)
        .remove();

    //update the path shape
    chordPaths.transition()
        .duration(1500)
        .attr("opacity", 0.5) //optional, just to observe the transition
        .style("fill", function (d) {
            return colors(d.source.index);
        })
        .attrTween("d", chordTween(last_layout))
        .transition().duration(100).attr("opacity", opacityDefault) //reset opacity
    ;

    //add the mouseover/fade out behaviour to the groups
    //this is reset on every update, so it will use the latest
    //chordPaths selection
    

    groupG.on("mouseover", fade(.1))
      .on("mouseout", fade(opacityDefault))
      .on("click", mouseoverChord)
      .on("mouseout", mouseoutChord);

    /*
    .data(function(chords) { return chords.groups; })
    .enter().append("g")
    .attr("class", "group")
    .on("mouseover", fade(.1))
    .on("mouseout", fade(opacityDefault))

    // text popups
    .on("click", mouseoverChord)
    .on("mouseout", mouseoutChord);
    */
    //the "unfade" is handled with CSS :hover class on g#circle
    //you could also do it using a mouseout event:
    /*
    g.on("mouseout", function() {
        if (this == g.node() )
            //only respond to mouseout of the entire circle
            //not mouseout events for sub-components
            chordPaths.classed("fade", false);
    });
    */
    
    last_layout = layout; //save for next update
    isUpdating = false;
//  }); //end of d3.json
}

function arcTween(oldLayout) {
    //this function will be called once per update cycle
    
    //Create a key:value version of the old layout's groups array
    //so we can easily find the matching group 
    //even if the group index values don't match the array index
    //(because of sorting)
    var oldGroups = {};
    if (oldLayout) {
        oldLayout.groups().forEach( function(groupData) {
            oldGroups[ groupData.index ] = groupData;
        });
    }
    
    return function (d, i) {
        var tween;
        var old = oldGroups[d.index];
        if (old) { //there's a matching old group
            tween = d3.interpolate(old, d);
        }
        else {
            //create a zero-width arc object
            var emptyArc = {startAngle:d.startAngle,
                            endAngle:d.startAngle};
            tween = d3.interpolate(emptyArc, d);
        }
        
        return function (t) {
            return arc( tween(t) );
        };
    };
}

function chordKey(data) {
    return (data.source.index < data.target.index) ?
        data.source.index  + "-" + data.target.index:
        data.target.index  + "-" + data.source.index;
    
    //create a key that will represent the relationship
    //between these two groups *regardless*
    //of which group is called 'source' and which 'target'
}
function chordTween(oldLayout) {
    //this function will be called once per update cycle
    
    //Create a key:value version of the old layout's chords array
    //so we can easily find the matching chord 
    //(which may not have a matching index)
    
    var oldChords = {};
    
    if (oldLayout) {
        oldLayout.chords().forEach( function(chordData) {
            oldChords[ chordKey(chordData) ] = chordData;
        });
    }
    
    return function (d, i) {
        //this function will be called for each active chord
        
        var tween;
        var old = oldChords[ chordKey(d) ];
        if (old) {
            //old is not undefined, i.e.
            //there is a matching old chord value
            
            //check whether source and target have been switched:
            if (d.source.index != old.source.index ){
                //swap source and target to match the new data
                old = {
                    source: old.target,
                    target: old.source
                };
            }
            
            tween = d3.interpolate(old, d);
        }
        else {
            //create a zero-width chord object
            var emptyChord = {
                source: { startAngle: d.source.startAngle,
                         endAngle: d.source.startAngle},
                target: { startAngle: d.target.startAngle,
                         endAngle: d.target.startAngle}
            };
            tween = d3.interpolate( emptyChord, d );
        }

        return function (t) {
            //this function calculates the intermediary shapes
            return path(tween(t));
        };
    };
}

////////////////////////////////////////////////////////////
////////////////// Extra Functions /////////////////////////
////////////////////////////////////////////////////////////

//Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(d,i) {
    g.selectAll("path.chord")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
    .transition()
        .style("opacity", opacity);
  };
}//fade

  //Highlight hovered over chord
function mouseoverChord(d,i) {
  //Show hovered over chord with full opacity
  if(!isUpdating){
    d3.select(this)
      .transition()
          .style("opacity", 1);

    currentInfoContinent = i;
    setInfos()
  }
}

function setInfos(){
  i = currentInfoContinent;
  var all_products = matrix[i].reduce(function(a,b){return a+b;});
  document.getElementById('continent').innerHTML = names[i];
  document.getElementById("continentInfo").rows[1].cells[1].innerHTML = Math.round(matrix[i][0]);
  document.getElementById("continentInfo").rows[2].cells[1].innerHTML = Math.round(matrix[i][1]);
  document.getElementById("continentInfo").rows[3].cells[1].innerHTML = Math.round(matrix[i][2]);
  document.getElementById("continentInfo").rows[4].cells[1].innerHTML = Math.round(matrix[i][3]);
  document.getElementById("continentInfo").rows[5].cells[1].innerHTML = Math.round(matrix[i][4]);
  document.getElementById("continentInfo").rows[6].cells[1].innerHTML = Math.round(all_products);


  document.getElementById('continent').innerHTML = names[i];
  
  document.getElementById("continentInfo").rows[1].cells[2].innerHTML = (matrix[i][0]/all_products*100).toFixed(2)+ "%";
  document.getElementById("continentInfo").rows[2].cells[2].innerHTML = (matrix[i][1]/all_products*100).toFixed(2)+ "%";
  document.getElementById("continentInfo").rows[3].cells[2].innerHTML = (matrix[i][2]/all_products*100).toFixed(2)+ "%";
  document.getElementById("continentInfo").rows[4].cells[2].innerHTML = (matrix[i][3]/all_products*100).toFixed(2)+ "%";
  document.getElementById("continentInfo").rows[5].cells[2].innerHTML = (matrix[i][4]/all_products*100).toFixed(2)+ "%";

}
//Bring all chords back to default opacity
function mouseoutChord(d) {

  //Set opacity back to default for all
  g.selectAll("path.chord")
    .transition()
    .style("opacity", opacityDefault);
  }      //function mouseoutChord

function disableButton(buttonNode) {
    d3.selectAll(".test")
        .attr("disabled", function(d) {
            return this === buttonNode? "true": null;
        });
}


d3.select("#before-onymous").on("click", function () {
    matrix = matrix_1
    //replace this with a file url as appropriate
    updateChord(matrix_1);
    setInfos()
    //enable other buttons, disable this one
    disableButton(this);
});

d3.select("#after-onymous").on("click", function () {
    matrix = matrix_2
    //replace this with a file url as appropriate
    updateChord(matrix_2);
    setInfos()
    //enable other buttons, disable this one
    disableButton(this);
});

matrix = matrix_1
updateChord(matrix_2);
updateChord(matrix_1);
setInfos();