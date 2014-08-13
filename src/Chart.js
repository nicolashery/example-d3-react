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

  dispatcher: null,

  componentDidMount: function() {
    var el = this.getDOMNode();
    var dispatcher = d3Chart.create(el, {
      width: this.props.width,
      height: this.props.height
    }, this.props.appState);
    dispatcher.on('point:mouseover', this.showTooltip);
    dispatcher.on('point:mouseout', this.hideTooltip);
    this.dispatcher = dispatcher;
  },

  componentDidUpdate: function(prevProps, prevState) {
    var el = this.getDOMNode();
    d3Chart.update(el, this.props.appState, this.dispatcher);
  },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  },

  showTooltip: function(d) {
    this.props.setAppState({
      tooltips: [d],
      // Disable animation
      prevDomain: null
    });
  },

  hideTooltip: function() {
    this.props.setAppState({
      tooltips: [],
      prevDomain: null
    });
  }
});

module.exports = Chart;
