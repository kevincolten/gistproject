collection @gists
attributes :title, :id
child(:gist_file) { attributes :id, :name, :body }