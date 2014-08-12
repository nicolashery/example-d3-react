/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var dataGenerator = require('./dataGenerator');
var Chart = require('./Chart');

require('./App.less');

var _data = dataGenerator.generate(50);

function getData(x1, x2) {
  return _.filter(_data, function(d) {
    return d.x >= x1 && d.x <= x2;
  });
}

var App = React.createClass({
  getInitialState: function() {
    return {
      data: getData(0, 30),
      domain: {x: [0, 30], y: [0, 100]},
      tooltips: []
    };
  },

  render: function() {
    return (
      <div className="App">
        <p>Chart</p>
        <Chart
          data={this.state.data}
          domain={this.state.domain}
          tooltips={this.state.tooltips} />
      </div>
    );
  }
});

module.exports = App;
