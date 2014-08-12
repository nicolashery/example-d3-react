/** @jsx React.DOM */

var React = require('react');

var d3Chart = require('./d3Chart');

require('./Chart.less');

var Chart = React.createClass({
  getDefaultProps: function() {
    return {
      width: '100%',
      height: '300px'
    };
  },

  componentDidMount: function() {
    var el = this.getDOMNode();
    d3Chart.create(el, this.props);
  },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  }
});

module.exports = Chart;
