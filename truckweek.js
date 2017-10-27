var usadata = [
  { key: 'Pickups', value: 16.03 },
  { key: 'Cars', value: 37.71 },
  { key: 'Cross-Overs', value: 30.41},
  { key: 'Vans', value: 5.60 },
  { key: 'SUVs', value: 10.25 }
];

var margin = {
  top: 25,   
  right: 25,  
  bottom: 25, 
  left: 25,   
};

var diameter = 300;
var outerRadius = 150;
var innerRadius = 100;

var color = d3.scale.category10()
  .range(['#cc0000', '#222', '#333', '#444', '#555', '#666']);

var pie = d3.layout.pie()
  .value(function(d) { return d.value; })
  .sort(null)
  .padAngle(0.025);

var arc = d3.svg.arc()
  .outerRadius(outerRadius)
  .innerRadius(innerRadius);

var svg = d3.select('#usa')
  .append('svg')
  .attr('width', diameter + margin.left + margin.right)
  .attr('height', diameter + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + (diameter/2 + margin.left) + ',' + (diameter/2 + margin.top) + ')');

var tooltip = d3.select('#usa')
  .append('div')
  .attr('class', 'tooltip');

svg.selectAll('path')
  .data(pie(usadata))
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', function(d,i) {
    return color(d.data.key);
  })
  .on('mouseover', function(d, i) {
    arc.outerRadius(outerRadius+5);
    d3.select(this)
      .transition()
      .duration(250)
      .attr('d', arc);
  
    // Generate tooltip html
    var tooltipHtml = '';
    tooltipHtml += '<p>' + d.data.key + '</p>';
    tooltipHtml += '<p>' + d.data.value + '%</p>';
    tooltip.html(tooltipHtml)
    tooltip
      .style('left', diameter/2 + arc.centroid(d)[0] + 'px')
      .style('top', diameter/2 + arc.centroid(d)[1] + 'px')

    // Show tooltip
    tooltip.transition()
        .duration(250)
        .ease('ease-out')
        .style('opacity', 1);
  })
  .on('mouseout', function(d, i) {
    arc.outerRadius(outerRadius);
    d3.select(this)
      .transition()
      .duration(250)
      .attr('d', arc);
  
    // Hide tooltip
    tooltip.transition()
      .duration(250)
      .ease('ease-out')
      .style('opacity', 0);
  })
  .transition()
    .duration(500)
    .attrTween('d', function(d) {
      var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
      return function(t) {
        return arc(interpolate(t));
      };
    })
    .call(function (transition, callback) {
      if ( transition.empty() ) {
        callback();
      }
      var n = 0;
      transition
        .each(function() { ++n; })
        .each('end', function() {
        if ( !--n ) {
          callback.apply(this, arguments);
        }
      });
    }, function() {
      renderDonutLabels(usadata);
      renderDonutLegend();
    });

var renderDonutLabels = function(data) {
  svg.selectAll('.label').remove();
  var text = svg.selectAll('.label').data(pie(data));
  text
    .enter()
    .append('text')
    .attr('class', 'label')
    .attr('dy', '.4em')
    .attr('opacity', 0)
    .attr('text-anchor', 'middle')
    .text(function(d) {
      return d.data.value + '%';
    })
    .transition()
      .duration(200)
      .attr('opacity', 1)
      .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')';
      });
  text.exit().remove();
};

var renderDonutLegend = function() {
  var legendRectSize = 20;
  var legendSpacing = 7;
  var legendHeight = legendRectSize + legendSpacing;

  var legend = svg.selectAll('.legend')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', function(d, i) {
      return 'translate(-35,' + ((i*legendHeight)-65) + ')';
    });

  legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .attr('rx', 20)
    .attr('ry', 20)
    .style('fill', color)
    .style('stroke', color);

  legend.append('text')
    .attr('x', 30)
    .attr('y', 15)
    .style('font-size', '14px')
    .text(function(d) {
      return d;
    });
};
