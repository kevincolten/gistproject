GistProject.Views.GistsIndex = Backbone.View.extend({

	render: function () {
		this.$el.html(this.template({ gists: this.collection }));
		return this;
	},

	template: JST['gists/index']

});
