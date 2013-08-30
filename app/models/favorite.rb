class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  belongs_to :gist
  belongs_to :user

end
