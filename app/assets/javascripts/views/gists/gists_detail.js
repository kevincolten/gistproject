GistProject.Views.GistDetail = Backbone.View.extend({

	initialize: function (options) {
		this.favorite = options.favorite;
		var renderCallback = this.render.bind(this);
		this.listenTo(this.collection,"add", renderCallback);
		this.listenTo(this.collection,"change", renderCallback);
		this.listenTo(this.collection,"remove", renderCallback);
	},

	render: function () {
		console.log("rendering");
		this.$el.html(this.template({ gist: this.model, favorite: this.favorite}));
		return this;
	},

	events: {
		"click button.favorite" : "addFavorite",
		"click button.unfavorite" : "unFavorite"
	},

	addFavorite: function () {
		event.preventDefault();
		this.favorite = this.collection.create({gist_id: this.model.get('id'),
														user_id: this.currentUserID});
	},

	unFavorite: function () {
		event.preventDefault();
		var that = this;
		var the_favorite = this.favorite;
		this.favorite = null;
		this.collection.remove(the_favorite);
		the_favorite.destroy();
	},

	template: JST['gists/detail']

});
