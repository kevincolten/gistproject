GistProject.Views.GistDetail = Backbone.View.extend({

	initialize: function (options) {
		this.favorite = options.favorite;
		var renderCallback = this.render.bind(this);
		this.listenTo(this.collection,"change", renderCallback);
	},

	render: function () {
		console.log("hello");
		this.$el.html(this.template({ gist: this.model, favorite: this.favorite}));
		return this;
	},

	events: {
		"click button.favorite" : "addFavorite",
		"click button.unfavorite" : "unFavorite"
	},

	addFavorite: function () {
		event.preventDefault();
		this.collection.create({gist_id: this.model.get('id'),
														user_id: this.currentUserID});
	},

	unFavorite: function () {
		event.preventDefault();
		var that = this;
		this.favorite.destroy();
	},

	template: JST['gists/detail']

});
