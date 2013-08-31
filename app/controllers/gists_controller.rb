class GistsController < ApplicationController

  def create
    ActiveRecord::Base.transaction do
      params[:gist][:user_id] = current_user.id
      @gist = Gist.new(params[:gist])
      @gist.save
      params[:gist_file][:gist_id] = @gist.id
      @gist_file = GistFile.new(params[:gist_file])
      @gist_file.save
    end
    render :json => @gist
  end

end
