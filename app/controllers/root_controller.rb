class RootController < ApplicationController

  def index
    @gists = current_user.gists
    @favorites = current_user.favorites
    respond_to do |format|
      format.html { render :index }
      format.json { render :index, :handlers => [:rabl] }
    end
  end


end
