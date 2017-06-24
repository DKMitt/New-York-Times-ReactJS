// inculde dependencies
var React = require("react");

// include Router / Route Info
var Router = require("react-router");
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;

// include required components in variables
var Main = require("../components/Main");
var Search = require("../components/Search");
var Saved = require("../components/Saved");

// export components back for use in other files
module.exports = (

	<Route path="/" component={Main}>

		<Route path="Search" component={Search} />
		<Route path="Saved" component={Saved} />

		<IndexRoute component={Search} />

	</Route>

	);