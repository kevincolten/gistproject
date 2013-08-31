class GistFile < ActiveRecord::Base
  attr_accessible :body, :name, :gist_id

  belongs_to :gist
end
