// include react / react router
var React = require("react");
var Router = require("react-router");

// include all of the sub-components
// var Search = require("./Search");
// var Saved = require("./Saved");

// helpers for making requests to API
// var helpers = require("./app/utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (
      
      <div className="main-container">


        <div className="container">

          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">New York Times ReactJS</a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#/search">Search</a></li>
                  <li><a href="#/saved">Saved Articles</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron">
            <h2 className="text-center"><strong>New York Times ReactJS Article Saver</strong></h2>
          </div>

          {this.props.children}

        </div>
      </div>

    )
  }
});

// Export the component back for use in other files
module.exports = Main;