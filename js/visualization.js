// Immediately Invoked Function Expression to limit access to our 
// variables and prevent 
(() => {

  console.log("Hello, world!");

  // Will be edited to follow the path later
  var scatterplot_data =
    [
      {
        "State": "California",
        "Ranking": 1,
        "Mortality deaths/100,000 births": 9.5,
        "% living below poverty line (2021)": 12.3,
        "% of non-white residents": 26.23,
        "Instances of hate crimes (per 100,000)": 2.76
      },
      {
        "State": "Wisconsin",
        "Ranking": 2,
        "Mortality deaths/100,000 births": 10.8,
        "% living below poverty line (2021)": 10.8,
        "% of non-white residents": 26.47,
        "Instances of hate crimes (per 100,000)": 1.34
      },
      {
        "State": "Rhode Island",
        "Ranking": 3,
        "Mortality deaths/100,000 births": 11.2,
        "% living below poverty line (2021)": 12.1,
        "% of non-white residents": 20.63,
        "Instances of hate crimes (per 100,000)": 1.9
      },
      {
        "State": "Minnesota",
        "Ranking": 4,
        "Mortality deaths/100,000 births": 12.4,
        "% living below poverty line (2021)": 9.3,
        "% of non-white residents": 23.44,
        "Instances of hate crimes (per 100,000)": 3.71
      },
      {
        "State": "Massachusetts",
        "Ranking": 5,
        "Mortality deaths/100,000 births": 14.2,
        "% living below poverty line (2021)": 10.4,
        "% of non-white residents": 6.32,
        "Instances of hate crimes (per 100,000)": 5.77
      },
      {
        "State": "Utah",
        "Ranking": 6,
        "Mortality deaths/100,000 births": 14.9,
        "% living below poverty line (2021)": 8.7,
        "% of non-white residents": 23.27,
        "Instances of hate crimes (per 100,000)": 2.45
      },
      {
        "State": "Pennsylvania",
        "Ranking": 7,
        "Mortality deaths/100,000 births": 15.6,
        "% living below poverty line (2021)": 12,
        "% of non-white residents": 28.85,
        "Instances of hate crimes (per 100,000)": 0.42
      },
      {
        "State": "Colorado",
        "Ranking": 8,
        "Mortality deaths/100,000 births": 15.9,
        "% living below poverty line (2021)": 9.7,
        "% of non-white residents": 24.63,
        "Instances of hate crimes (per 100,000)": 3.73
      },
      {
        "State": "Connecticut",
        "Ranking": 9,
        "Mortality deaths/100,000 births": 16.7,
        "% living below poverty line (2021)": 10.1,
        "% of non-white residents": 43.95,
        "Instances of hate crimes (per 100,000)": 3.91
      },
      {
        "State": "New Hampshire",
        "Ranking": 10,
        "Mortality deaths/100,000 births": 16.7,
        "% living below poverty line (2021)": 7.4,
        "% of non-white residents": 14.69,
        "Instances of hate crimes (per 100,000)": 1.87
      },
      {
        "State": "Oregon",
        "Ranking": 11,
        "Mortality deaths/100,000 births": 16.8,
        "% living below poverty line (2021)": 12.2,
        "% of non-white residents": 19.53,
        "Instances of hate crimes (per 100,000)": 5.25
      },
      {
        "State": "Hawaii",
        "Ranking": 12,
        "Mortality deaths/100,000 births": 16.9,
        "% living below poverty line (2021)": 10.9,
        "% of non-white residents": 28.36,
        "Instances of hate crimes (per 100,000)": null
      },
      {
        "State": "Illinois",
        "Ranking": 13,
        "Mortality deaths/100,000 births": 16.9,
        "% living below poverty line (2021)": 12.1,
        "% of non-white residents": 75.85,
        "Instances of hate crimes (per 100,000)": 0.69
      },
      {
        "State": "Idaho",
        "Ranking": 14,
        "Mortality deaths/100,000 births": 18.2,
        "% living below poverty line (2021)": 10.8,
        "% of non-white residents": 42.75,
        "Instances of hate crimes (per 100,000)": 2.08
      },
      {
        "State": "Michigan",
        "Ranking": 15,
        "Mortality deaths/100,000 births": 18.4,
        "% living below poverty line (2021)": 13,
        "% of non-white residents": 45.76,
        "Instances of hate crimes (per 100,000)": 3.62
      },
      {
        "State": "Iowa",
        "Ranking": 16,
        "Mortality deaths/100,000 births": 18.7,
        "% living below poverty line (2021)": 11,
        "% of non-white residents": 30.21,
        "Instances of hate crimes (per 100,000)": 0.52
      },
      {
        "State": "Delaware",
        "Ranking": 17,
        "Mortality deaths/100,000 births": 18.9,
        "% living below poverty line (2021)": 11.5,
        "% of non-white residents": 18.48,
        "Instances of hate crimes (per 100,000)": 1.65
      },
      {
        "State": "New York",
        "Ranking": 18,
        "Mortality deaths/100,000 births": 19.8,
        "% living below poverty line (2021)": 14,
        "% of non-white residents": 34.5,
        "Instances of hate crimes (per 100,000)": 2.82
      },
      {
        "State": "Washington",
        "Ranking": 19,
        "Mortality deaths/100,000 births": 20.4,
        "% living below poverty line (2021)": 9.9,
        "% of non-white residents": 6.4,
        "Instances of hate crimes (per 100,000)": 3.12
      }
  ];

  var margin = { top: 20, right: 20, bottom: 50, left: 70 };
  var width = 800 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  var svg = d3.select('#scatterplot')
    .append('svg')
    .attr('id', 'vis-svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  var xScale = d3.scaleLinear().range([0, width]);
  var yScale = d3.scaleLinear().range([height, 0]);

  xScale.domain([d3.min(scatterplot_data, d => d["% living below poverty line (2021)"]), d3.max(scatterplot_data, d => d["% living below poverty line (2021)"])]);
  yScale.domain([d3.min(scatterplot_data, d => d["Instances of hate crimes (per 100,000)"]), d3.max(scatterplot_data, d => d["Instances of hate crimes (per 100,000)"])]);

  svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(xScale))
    .append('text')
    .attr('class', 'axis-label')
    .attr('x', width / 2)
    .attr('y', 40)
    .style('text-anchor', 'middle')
    .text('% living below poverty line (2021)');

  svg.append('g')
    .call(d3.axisLeft(yScale))
    .append('text')
    .attr('class', 'axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('y', -60)
    .attr('x', -height / 2)
    .style('text-anchor', 'middle')
    .text('Instances of hate crimes (per 100,000)');

  svg.selectAll('circle')
    .data(scatterplot_data)
    .enter().append('circle')
    .attr('cx', d => xScale(d["% living below poverty line (2021)"]))
    .attr('cy', d => yScale(d["Instances of hate crimes (per 100,000)"]))
    .attr('r', 8)

  svg.selectAll('text')
    .data(scatterplot_data)
    .enter().append('text')
    .attr('x', d => xScale(d["% living below poverty line (2021)"]) + 10) 
    .attr('y', d => yScale(d["Instances of hate crimes (per 100,000)"]))
    .text(d => d.State);
})();
