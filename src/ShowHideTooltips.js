/** @jsx React.DOM */

var React = require('react');

var ShowHideTooltips = React.createClass({
  render: function() {
    return (
      <p>
        {'Tooltips: '}
        <a href="#" onClick={this.handleShow}>Show all</a>
        <span> - </span>
        <a href="#" onClick={this.handleHide}>Hide all</a>
      </p>
    );
  },

  handleShow: function(e) {
    e.preventDefault();
    this.props.setAppState({
      showingAllTooltips: true,
      // Disable animation
      prevDomain: null
    });
  },

  handleHide: function(e) {
    e.preventDefault();
    this.props.setAppState({
      showingAllTooltips: false,
      prevDomain: null
    });
  }
});

module.exports = ShowHideTooltips;
