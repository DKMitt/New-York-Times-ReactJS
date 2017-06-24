// include dependencies
var axios = require("axios");

// API key for API calls
var APIKey = "089e0e354a64408882b13aec75a073ef";

// helpers functions for making API calls
var helpers = {

	runQuery: function(term, start, end) {

		var term = term.trim();
		var start = start.trim() + "0101";
		var end = end.trim() + "1231";

		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
			params: {
				"api-key": APIKey,
				"q": term,
				"begin_date": start,
				"end_date": end
			}
		})

		.then(function(results){

			return results.data.response;

		});
	},

	getSaved: function(){

		return axios.get("/api/saved")
			.then(function(results){

				return results;
			})
	},

	postSaved: function(title, date, url) {

		var newArticle = {title: title, date: date, url: url};
		return axios.post("/api/saved", newArticle)
			.then(function(results){
				return results._id;
			})
	},

	deletedSaved: function(title, data, url){

		return axios.delete("/api/saved", {
			params: {
				"title": title,
				"data": data,
				"url": url
			}
		})

		.then(function(results){
			return results;
		})

	}

}

// export API helpers
module.exports = helpers;
