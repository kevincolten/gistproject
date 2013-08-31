GistProject.Views.GistsForm = Backbone.View.extend({

	events: {
		"click button#gist_submit" : "createGist",
	},

	createGist: function () {
		event.preventDefault();
		var gistTitle = $('input#gist_title').val();
		var gistName = $('input#gist_name').val();
		var gistBody = $('textarea#gist_body').val();
		var gist = this.collection.create({
							 title     : gistTitle,
							 gist_file : {
									   name : gistName,
										 body: gistBody
										 }
									 }, {
			success: function () {
				GistProject.Store.router.detail(gist.id);
			}
		});
	},

	render: function () {
		this.$el.html(this.template({})).append(this.gistFileTemplate({}));
		return this;
	},

	template: JST['gists/form'],

	gistFileTemplate: JST['gists/gistFileFormPart']

});
