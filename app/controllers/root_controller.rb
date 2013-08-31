class RootController < ApplicationController

  def index
    @gists = current_user.gists.includes(:gist_file)
    @favorites = current_user.favorites
    respond_to do |format|
      format.html { render :index }
      format.json { render :handlers => [:rabl]}
    end
  end


end
