/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var Pagination = React.createClass({
  render: function() {
    return (
      <p>
        {'Pages: '}
        <a href="#" onClick={this.handlePrevious}>Previous</a>
        <span> - </span>
        <a href="#" onClick={this.handleNext}>Next</a>
      </p>
    );
  },

  handlePrevious: function(e) {
    e.preventDefault();
    this.shiftData(-20);
  },

  handleNext: function(e) {
    e.preventDefault();
    this.shiftData(+20);
  },

  shiftData: function(step) {
    var currentDomain = this.props.appState.domain.x;
    var newDomain = _.map(currentDomain, function(x) {
      return x + step;
    });
    this.props.setAppState({
      data: this.props.getData(newDomain),
      domain: _.assign({}, this.props.appState.domain, {
        x: newDomain
      }),
      tooltips: [],
      prevDomain: this.props.appState.domain
    });
  }
});

module.exports = Pagination;
