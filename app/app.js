// include dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var Router = require("react-router").Router;

// reuired page brought in
var routes = require("./config/routes");


// Include the Main Component
// var Main = require("./components/Main"); 


// render our main component (in this case Main)
// ReactDOM.render(<Main />, document.getElementById("app"));


// to render components
ReactDOM.render(<Router>{routers}</Router>, document.getElementById("app"));

