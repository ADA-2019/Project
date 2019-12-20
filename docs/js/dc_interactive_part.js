//# dc.js Getting Started and How-To Guide
'use strict';

/* global dc,d3,crossfilter */

// ### Create Chart Objects

// Create chart objects associated with the container elements identified by the css selector.
// Note: It is often a good idea to have these objects accessible at the global scope so that they can be modified or
// filtered by other page controls.
var nbOfMarketsChart = dc.pieChart('#nbMarket-chart');
var meanPriceChart = dc.lineChart('#price-chart');
var originCountryChart = dc.pieChart('#country-chart');
var productsCategoryChart = dc.rowChart('#cat-products-chart');
var nbOfProductsChart = dc.lineChart('#nbProducts-chart');
var nbOfVendorsChart = dc.lineChart('#nbVendors-chart');
var VendorsDealsProductsChart = dc.bubbleChart('#vendors-bubble-chart');

// Load the date
d3.csv('test3.csv').then(function (data) {
    // Since its a csv file we need to format the data a bit.
    var dateFormatSpecifier = '%Y-%m-%d';
    var dateFormat = d3.timeFormat(dateFormatSpecifier);
    var dateFormatParser = d3.timeParse(dateFormatSpecifier);
    var numberFormat = d3.format('.2f');

    data.forEach(function (d) {
        d.dd = dateFormatParser(d.date);
        d.month = d3.timeMonth(d.dd); // pre-calculate month for better performance

        d.price = +d.price; // coerce to number
        d.count = +d.count;
        d.mean_price_usd = +d.mean_price_usd;
        d.mean_price_btc = +d.mean_price_btc;
    });

    //### Create Crossfilter Dimensions and Groups

    //See the [crossfilter API](https://github.com/square/crossfilter/wiki/API-Reference) for reference.
    var ndx = crossfilter(data);
    var all = ndx.groupAll();

    // Dimension by year
    var nbDealsDimension = ndx.dimension(function (d) {
        //return d3.timeYear(d.dd).getFullYear();
        return d.nbDeals
    });
    // Maintain running tallies by year as filters are applied or removed
    var VendorsDealsProductsGroup = nbDealsDimension.group().reduce(
        /* callback for when data is added to the current filter results */
        function (p, v) {
            ++p.count;
            p.agg_price += v.mean_price_usd * v.count;
            p.numberOfProducts += v.count;
            p.numberOfVendors += 1;
            p.meanPrice = p.agg_price/p.numberOfProducts;
            return p;
        },
        /* callback for when data is removed from the current filter results */
        function (p, v) {
            --p.count;
            p.agg_price -= v.mean_price_usd * v.count;
            p.numberOfProducts -= v.count;
            p.numberOfVendors -= 1;
            p.meanPrice = p.count? p.agg_price/p.numberOfProducts : 0;
            return p;
        },
        /* initialize p */
        function () {
            return {
                count: 0,
                numberOfProducts: 0,
                numberOfVendors: 0,
                meanPrice: 0,
                agg_price: 0
            };
        }
    );

    // Dimension by full date
    var dateDimension = ndx.dimension(function (d) {
        return d.dd;
    });

    // Group by total movement within month
    var nbVendorsGroup = dateDimension.group().reduceSum(function (d) {
        return 1;
    });
    // Group by total volume within move, and scale down result
    var nbProductsGroup = dateDimension.group().reduceSum(function (d) {
        return d.count;
    });

    // Create categorical dimension
    var numberOfMarkets = ndx.dimension(function (d) {
        return d.numMarkets;
    });
    // Produce counts records in the dimension
    var numberOfMarketsGroup = numberOfMarkets.group();

    var meanPriceGroup = dateDimension.group().reduce(
        /* callback for when data is added to the current filter results */
        function (p, v) {
            ++p.date;
            p.agg_price += v.mean_price_usd * v.count;
            p.numberOfProducts += v.count;
            p.avg = Math.round(p.agg_price /p.numberOfProducts);
            return p;
        },
        /* callback for when data is removed from the current filter results */
        function (p, v) {
            --p.date;
            p.agg_price -= v.mean_price_usd * v.count;
            p.numberOfProducts -= v.count;
            p.avg = p.date ?  Math.round(p.agg_price /p.numberOfProducts):0;
            return p;
        },
        /* initialize p */
        function () {
            return {
                date: 0,
                numberOfProducts: 0,
                numberOfVendors: 0,
                avg: 0,
                agg_price: 0
            };
        }
    );
    

    // Summarize volume by country
    var country = ndx.dimension(function (d) {
        return d.country
    });
    var countryGroup = country.group().reduceSum(function (d) {
        return 1;
    });

    // Counts per weekday
    var productsCategories = ndx.dimension(function (d) {

        return d.cat + '.' + d.cat;
    });
    var productsCategoriesGroup = productsCategories.group();

    //### Define Chart Attributes
    // Define chart attributes using fluent methods. See the
    // [dc.js API Reference](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md) for more information
    //

    //#### Bubble Chart

    //Create a bubble chart and use the given css selector as anchor. You can also specify
    //an optional chart group for this chart to be scoped within. When a chart belongs
    //to a specific group then any interaction with the chart will only trigger redraws
    //on charts within the same chart group.
    // <br>API: [Bubble Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#bubble-chart)

    VendorsDealsProductsChart /* dc.bubbleChart('#yearly-bubble-chart', 'chartGroup') */
        // (_optional_) define chart width, `default = 200`
        .width(990)
        // (_optional_) define chart height, `default = 200`
        .height(250)
        // (_optional_) define chart transition duration, `default = 750`
        .transitionDuration(750)
        .margins({top: 30, right: 60, bottom: 50, left: 60})
        .dimension(nbDealsDimension)
        //The bubble chart expects the groups are reduced to multiple values which are used
        //to generate x, y, and radius for each key (bubble) in the group
        .group(VendorsDealsProductsGroup)
        // (_optional_) define color function or array for bubbles: [ColorBrewer](http://colorbrewer2.org/)
        .colors(d3.schemeRdYlGn[9])
        //(optional) define color domain to match your data domain if you want to bind data or color
        .colorDomain([0, 250000])
    //##### Accessors

    //Accessor functions are applied to each value returned by the grouping

        // `.colorAccessor` - the returned value will be passed to the `.colors()` scale to determine a fill color
        .colorAccessor(function (d) {
            return d.value.numberOfProducts;
        })
        // `.keyAccessor` - the `X` value will be passed to the `.x()` scale to determine pixel location
        .keyAccessor(function (p) {
            return p.value.numberOfVendors;
        })
        // `.valueAccessor` - the `Y` value will be passed to the `.y()` scale to determine pixel location
        .valueAccessor(function (p) {
            return p.value.meanPrice;
        })
        // `.radiusValueAccessor` - the value will be passed to the `.r()` scale to determine radius size;
        //   by default this maps linearly to [0,100]
        .radiusValueAccessor(function (p) {
            return p.value.numberOfProducts;
        })
        .maxBubbleRelativeSize(0.3)
        .x(d3.scaleLinear().domain([0, 40000]))
        .y(d3.scaleLinear().domain([0, 2500]))
        .r(d3.scaleLinear().domain([0, 5000000]))
        //##### Elastic Scaling

        //`.elasticY` and `.elasticX` determine whether the chart should rescale each axis to fit the data.
        .elasticY(true)
        .elasticX(true)
        //.elasticY(true)
        //`.yAxisPadding` and `.xAxisPadding` add padding to data above and below their max values in the same unit
        //domains as the Accessors.
        .yAxisPadding(500)
        .xAxisPadding(500)
        // (_optional_) render horizontal grid lines, `default=false`
        .renderHorizontalGridLines(true)
        // (_optional_) render vertical grid lines, `default=false`
        .renderVerticalGridLines(true)
        // (_optional_) render an axis label below the x axis
        .xAxisLabel('Number of vendors')
        // (_optional_) render a vertical axis lable left of the y axis
        .yAxisLabel('Mean price')
        //##### Labels and  Titles

        //Labels are displayed on the chart for each bubble. Titles displayed on mouseover.
        // (_optional_) whether chart should render labels, `default = true`
        .renderLabel(true)
        .label(function (p) {
            return p.key;
        })
        // (_optional_) whether chart should render titles, `default = false`
        .renderTitle(true)
        .title(function (p) {
            return [
                'Number of Deals: ' + p.key,
                'Number of vendors: ' + numberFormat(p.value.numberOfVendors),
                'Number of products: ' + numberFormat(p.value.numberOfProducts),
                'Mean price: ' + numberFormat(p.value.meanPrice)
            ].join('\n');
        })
        //#### Customize Axes

        // Set a custom tick format. Both `.yAxis()` and `.xAxis()` return an axis object,
        // so any additional method chaining applies to the axis, not the chart.
        ;

    // Fix bug when bubble chart has to rescale, all bubble end at the top
    /*
        dc.override(VendorsDealsProductsChart, "_prepareYAxis", function(g) {
        this.__prepareYAxis(g);
        var max = d3.max(VendorsDealsProductsChart.data(), function (layer) {
                      return d3.max(layer.values, function (p) {
                          return p.y + p.y;
                      });
                  });
        this.y(d3.scaleLinear().domain([0, max]))
    });

    */
    // #### Pie/Donut Charts

    // Create a pie chart and use the given css selector as anchor. You can also specify
    // an optional chart group for this chart to be scoped within. When a chart belongs
    // to a specific group then any interaction with such chart will only trigger redraw
    // on other charts within the same chart group.
    // <br>API: [Pie Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#pie-chart)

nbOfMarketsChart /* dc.pieChart('#gain-loss-chart', 'chartGroup') */
    // (_optional_) define chart width, `default = 200`
        .width(180)
    // (optional) define chart height, `default = 200`
        .height(180)
    // Define pie radius
        .radius(80)
    // Set dimension
        .dimension(numberOfMarkets)
    // Set group
        .group(numberOfMarketsGroup)
    // (_optional_) by default pie chart will use `group.key` as its label but you can overwrite it with a closure.
        .label(function (d) {
            if (nbOfMarketsChart.hasFilter() && !nbOfMarketsChart.hasFilter(d.key)) {
                return d.key + '(0%)';
            }
            var label = d.key;
            if (all.value()) {
                label += '(' + Math.floor(d.value / all.value() * 100) + '%)';
            }
            return label;
        })
    /*
        // (_optional_) whether chart should render labels, `default = true`
        .renderLabel(true)
        // (_optional_) if inner radius is used then a donut chart will be generated instead of pie chart
        .innerRadius(40)
        // (_optional_) define chart transition duration, `default = 350`
        .transitionDuration(500)
        // (_optional_) define color array for slices
        .colors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
        // (_optional_) define color domain to match your data domain if you want to bind data or color
        .colorDomain([-1750, 1644])
        // (_optional_) define color value accessor
        .colorAccessor(function(d, i){return d.value;})
        */;

    originCountryChart /* dc.pieChart('#country-chart', 'chartGroup') */
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(country)
        .group(countryGroup);

    //#### Row Chart

    // Create a row chart and use the given css selector as anchor. You can also specify
    // an optional chart group for this chart to be scoped within. When a chart belongs
    // to a specific group then any interaction with such chart will only trigger redraw
    // on other charts within the same chart group.
    // <br>API: [Row Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#row-chart)
    productsCategoryChart /* dc.rowChart('#day-of-week-chart', 'chartGroup') */
        .width(250)
        .height(180)
        .margins({top: 20, left: 100, right: 20, bottom: 20})
        .group(productsCategoriesGroup)
        .dimension(productsCategories)
        // Assign colors to each value in the x scale domain
        .ordinalColors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
        .label(function (d) {
            return d.key.split('.')[1];
        })
        .labelOffsetX( -20)
        // Title sets the row text
        .title(function (d) {
            return d.value;
        })
        .elasticX(true)
        .xAxis().ticks(4);

        productsCategoryChart.on('renderlet', function (chart) {
            chart.selectAll("g.row  text")
                .style("text-anchor", "end")
                .call(function (t) {
                    t.each(function (d) {
                        var self = d3.select(this);
                        var text = self.text();
                        if (text.length > 14) {
                            self.text('');
                            text = text.substring(0, 14) + '..';
                            self.text(text);
                        }
                    })
                });
        });

    //#### Bar Chart

    // Create a bar chart and use the given css selector as anchor. You can also specify
    // an optional chart group for this chart to be scoped within. When a chart belongs
    // to a specific group then any interaction with such chart will only trigger redraw
    // on other charts within the same chart group.
    // <br>API: [Bar Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#bar-chart)
    meanPriceChart /* dc.barChart('#volume-month-chart', 'chartGroup') */
        .width(350)
        .height(180)
        .margins({top: 20, right: 20, bottom: 20, left: 40})
        .transitionDuration(1000)
        .dimension(dateDimension)
        .rangeChart(nbOfProductsChart)
        .x(d3.scaleTime().domain([new Date(2014, 1, 1), new Date(2015, 7, 1)]))
        .round(d3.timeMonth.round)
        .xUnits(d3.timeMonths)
        .elasticY(true)
        .renderHorizontalGridLines(true)
        .brushOn(false)

        .group(meanPriceGroup)
        .valueAccessor(function (p) {
            return p.value.avg;
        })
        .title(function (d) {
            var value = d.value.avg ? d.value.avg : d.value;
            if (isNaN(value)) {
                value = 0;
            }
            return dateFormat(d.key) + '\n' + numberFormat(value);
        });

    // Customize axes

    meanPriceChart.yAxis().ticks(5);


    //#### Stacked Area Chart

    //Specify an area chart by using a line chart with `.renderArea(true)`.
    // <br>API: [Stack Mixin](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#stack-mixin),
    // [Line Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#line-chart)
    nbOfProductsChart /* dc.lineChart('#monthly-move-chart', 'chartGroup') */
        .renderArea(true)
        .width(990)
        .height(200)
        .transitionDuration(1000)
        .margins({top: 30, right: 20, bottom: 20, left: 50})
        .dimension(dateDimension)
        .mouseZoomable(false)
    // Specify a "range chart" to link its brush extent with the zoom of the current "focus chart".
        .rangeChart(nbOfVendorsChart)
        .x(d3.scaleTime().domain([new Date(2014, 1, 1), new Date(2015, 6, 1)]))
        .round(d3.timeMonth.round)
        .xUnits(d3.timeMonths)
        .elasticY(true).elasticX(true)
        .renderHorizontalGridLines(true)
    //##### Legend

        // Position the legend relative to the chart origin and specify items' height and separation.
        .legend(dc.legend().x(800).y(10).itemHeight(13).gap(5))
        .brushOn(true)
        // Add the base layer of the stack with group. The second parameter specifies a series name for use in the
        // legend.
        // The `.valueAccessor` will be used for the base layer
        .group(nbProductsGroup, 'Number of products available')
        // Title can be called by any stack layer.
        .title(function (d) {
            var value = d.value.avg ? d.value.avg : d.value;
            if (isNaN(value)) {
                value = 0;
            }
            return dateFormat(d.key) + '\n' + numberFormat(value);
        });

    //#### Range Chart

    // Since this bar chart is specified as "range chart" for the area chart, its brush extent
    // will always match the zoom of the area chart.
    nbOfVendorsChart.width(990) /* dc.barChart('#monthly-volume-chart', 'chartGroup'); */
        .height(200)
        .margins({top: 30, right: 30, bottom: 40, left: 50})
        .dimension(dateDimension)
        .rangeChart(nbOfProductsChart)
        .group(nbVendorsGroup, 'Number of vendors')
        .legend(dc.legend().x(800).y(10).itemHeight(13).gap(5))
        .x(d3.scaleTime().domain([new Date(2014, 1, 1), new Date(2015, 6, 1)]))
        .round(d3.timeMonth.round)
        .xUnits(d3.timeMonths)
        .elasticY(true)
        .elasticX(true)
        ;


    //#### Rendering

    //simply call `.renderAll()` to render all charts on the page
    dc.renderAll();
    /*
    // Or you can render charts belonging to a specific chart group
    dc.renderAll('group');
    // Once rendered you can call `.redrawAll()` to update charts incrementally when the data
    // changes, without re-rendering everything
    dc.redrawAll();
    // Or you can choose to redraw only those charts associated with a specific chart group
    dc.redrawAll('group');
    */

});

//#### Versions

//Determine the current version of dc with `dc.version`
d3.selectAll('#version').text(dc.version);

// Determine latest stable version in the repo via Github API
d3.json('https://api.github.com/repos/dc-js/dc.js/releases/latest').then(function (latestRelease) {
    /* eslint camelcase: 0 */
    d3.selectAll('#latest').text(latestRelease.tag_name);
});
