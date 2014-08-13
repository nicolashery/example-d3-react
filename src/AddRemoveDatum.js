/** @jsx React.DOM */

var React = require('react');

var AddRemoveDatum = React.createClass({
  render: function() {
    return (
      <p>
        {'Data points: '}
        <a href="#" onClick={this.handleAdd}>Add</a>
        <span> - </span>
        <a href="#" onClick={this.handleRemove}>Remove</a>
      </p>
    );
  },

  handleAdd: function(e) {
    e.preventDefault();
    var domain = this.props.appState.domain.x;
    this.props.setAppState({
      data: this.props.addDatum(domain),
      // Disable animation
      prevDomain: null
    });
  },

  handleRemove: function(e) {
    e.preventDefault();
    var domain = this.props.appState.domain.x;
    this.props.setAppState({
      data: this.props.removeDatum(domain),
      prevDomain: null
    });
  }
});

module.exports = AddRemoveDatum;
