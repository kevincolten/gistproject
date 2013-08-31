String.prototype.addSlashes = function()
{
   //no need to do (str+'') anymore because 'this' can only be a string
   return this.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

window.GistProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	Store: {},
  initialize: function() {
		var gists = JSON.parse($('#bootstrap_gists').html());
		var favorites = JSON.parse($('#bootstrap_favorites').html());
		var current_user_id = parseInt($('#bootstrap_current_user_id').attr('data'));
		GistProject.Store.router = new GistProject.Routers.Gists({
			gists: new GistProject.Collections.Gists(gists),
			favorites : new GistProject.Collections.Favorites(favorites),
			current_user_id : current_user_id
		});
		Backbone.history.start();
  }
};

$(document).ready(function(){
  GistProject.initialize();
});
