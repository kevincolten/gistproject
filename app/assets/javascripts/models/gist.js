GistProject.Models.Gist = Backbone.Model.extend({

	url: 'gists',

	parse: function (gist) {
		gist.gist_files = new GistProject.Collections.GistFiles(gist.id);
		return gist;
	}
});
