/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

require('./Stats.less');

var Stats = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <div className="Stats">
        {this.renderCount(data)}
        {this.renderAverage(data)}
      </div>
    );
  },

  renderCount: function(data) {
    return (
      <div className="Stats-item">
        {'Count: '}<strong>{data.length}</strong>
      </div>
    );
  },

  renderAverage: function(data) {
    var avg;
    var n = data.length;
    if (!n) {
      avg = '-';
    }
    else {
      var sum = _.reduce(data, function(sum, d) {
        return sum + d.z;
      }, 0);
      avg = Math.round(sum/n * 10)/10;
    }
    return (
      <div className="Stats-item">
        {'Average size: '}<strong>{avg}</strong>
      </div>
    );
  }
});

module.exports = Stats;
