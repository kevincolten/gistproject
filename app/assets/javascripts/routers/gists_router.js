GistProject.Routers.Gists = Backbone.Router.extend({

	initialize: function (options) {
		this.gists = options.gists;
		this.favorites = options.favorites;
		this.currentUserID = options.current_user_id;
	},

	routes: {
		"" : "index",
		"gists/:id" : "detail"
	},

	index: function () {
		var gistsIndexView = new GistProject.Views.GistsIndex({
			collection: this.gists
		});
		$('#container').html(gistsIndexView.render().$el);
	},

	detail: function (id) {
		var gist = this.gists.get(id);
		var that = this;
		var favorite = this.favorites.find(function(fav){
			return parseInt(id) === parseInt(fav.get('gist_id'));
		});
		var gistDetailView = new GistProject.Views.GistDetail({
			model : gist,
			favorite : favorite,
			currentUserID : this.currentUserID,
			collection : this.favorites

		});
		$('#container').html(gistDetailView.render().$el);
	}

});
