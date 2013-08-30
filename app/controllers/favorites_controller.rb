class FavoritesController < ApplicationController


  def create
    @favorite = Favorite.new(:user_id => current_user.id,
                             :gist_id => params[:gist_id])
    @favorite.save
    render :json => @favorite
  end

  def destroy
    @favorite = Favorite.find_by_user_id_and_gist_id(current_user.id,
                                                     params[:gist_id])
    @favorite.destroy
    render :json => @favorite
  end
end
