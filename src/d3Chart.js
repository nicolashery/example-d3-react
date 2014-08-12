var d3 = require('d3');

require('./d3Chart.less');

var ns = {};

ns.create = function(el, state) {
  d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', state.width)
      .attr('height', state.height)
    .append('g')
      .attr('class', 'd3-points');

  this.update(el, state);
};

ns.update = function(el, state) {
  var scales = this._scales(el, state.domain);
  this._drawPoints(el, scales, state.data);
};

ns._scales = function(el, domain) {
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scale.linear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scale.linear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scale.linear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};

ns._drawPoints = function(el, scales, data) {
  var g = d3.select(el).selectAll('.d3-points');

  var point = g.selectAll('.d3-point')
    .data(data, function(d) { return d.id; });

  point.enter().append('circle')
      .attr('class', 'd3-point');

  point.attr('cx', function(d) { return scales.x(d.x); })
      .attr('cy', function(d) { return scales.y(d.y); })
      .attr('r', function(d) { return scales.z(d.z); });

  point.exit().remove();
};

ns.destroy = function(el) {

};

module.exports = ns;
