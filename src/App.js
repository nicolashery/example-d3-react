/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var dataGenerator = require('./dataGenerator');

var Pagination = require('./Pagination');
var Chart = require('./Chart');
var Stats = require('./Stats');
var ShowHideTooltips = require('./ShowHideTooltips');
var AddRemoveDatum = require('./AddRemoveDatum');

require('./App.less');

var App = React.createClass({
  getInitialState: function() {
    var domain = [0, 30];
    return {
      data: this.getData(domain),
      domain: {x: domain, y: [0, 100]},
      tooltip: null,
      prevDomain: null,
      showingAllTooltips: false
    };
  },

  _allData: dataGenerator.generate(50),

  getData: function(domain) {
    return _.filter(this._allData, this.isInDomain.bind(null, domain));
  },

  addDatum: function(domain) {
    this._allData.push(dataGenerator.generateDatum(domain));
    return this.getData(domain);
  },

  removeDatum: function(domain) {
    var match = _.find(this._allData, this.isInDomain.bind(null, domain));
    if (match) {
      this._allData = _.reject(this._allData, {id: match.id});
    }
    return this.getData(domain);
  },

  isInDomain: function(domain, d) {
    return d.x >= domain[0] && d.x <= domain[1];
  },

  render: function() {
    return (
      <div className="App">
        <Pagination
          appState={this.state}
          setAppState={this.setAppState}
          getData={this.getData} />
        <Chart
          appState={this.state}
          setAppState={this.setAppState} />
        <Stats data={this.state.data} />
        <ShowHideTooltips
          appState={this.state}
          setAppState={this.setAppState} />
        <AddRemoveDatum
          appState={this.state}
          setAppState={this.setAppState}
          addDatum={this.addDatum}
          removeDatum={this.removeDatum} />
      </div>
    );
  },

  setAppState: function(partialState, callback) {
    return this.setState(partialState, callback);
  }
});

module.exports = App;
