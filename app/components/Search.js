// queries the NYT API for articles. 

// include dependencies
var React = require("react");
var Router = require('react-router');

// include search query pages
var Query = require('./Search/Query');
var Results = require('./Search/Results');

// include helpers
var helpers = require('../utils/helpers');

// Creating the Results component
var Search = React.createClass({
  
  getInitialState: function() {
    return {
      queryTerm: "",
      startYear: "",
      endYear: "",
      results: {}
    }
  },

  componentDidUpdate: function(prevProps, prevState)  {


    if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear))
    {
      helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear)

      .then(function(data)  {
        if (data != this.state.results)
        {
          this.setState({
            results: data
          })
        }

      }.bind(this))
    }
  },

  setQuery: function(newQuery, newStart, newEnd){

    this.setState({
      queryTerm: newQuery,
      startYear: newStart,
      endYear: newEnd
    })
  },

  render: function(){

    return(

      <div className="main-container">

        <Query updateSearch={this.setQuery} />

        <Results results={this.state.results}/>

      </div>

    )
  }
});

// Export the component back for use in other files
module.exports = Search;
