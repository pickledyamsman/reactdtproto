class Api::V1::GamesController < ApplicationController
  
  def index
    render json: {
      table: Game.paginate(page: page)
                     .order(sort_by + ' ' + order),
      page: page,
      pages: Game.pages
    }
  end    
  
  def search
    query = params[:query]
    games = Game.where('name LIKE ? OR genre LIKE ? OR publisher LIKE ?',
                           "%#{query}%", "%#{query}%", "%#{query}%")
                .paginate(page: page)
    render json: games
  end    

  private

  def game_params
    params.require(:game).permit(:name, :genre, :publisher)
  end

  def sort_by
    %w(name
       genre
       publisher).include?(params[:sort_by]) ? params[:sort_by] : 'name'
  end

  def order
    %w(asc desc).include?(params[:order]) ? params[:order] : 'asc'
  end

  def page
    params[:page] || 1
  end
end