#
class Api::V1::RecordsController < ApplicationController
  def index
    render json: {
      table: Record.paginate(page: page)
                   .order(sort_by + ' ' + order),
      page: page,
      pages: Record.pages
    }
  end

  def search
    query = params[:query]
    records = Record.where('title LIKE ? OR artist LIKE ? OR CAST(year AS text) LIKE ?',
                           "%#{query}%", "%#{query}%", "%#{query}%")
                    .paginate(page: page)
    render json: records
  end

  private

  def record_params
    params.require(:record).permit(:title, :artist, :year)
  end

  def sort_by
    %w[title artist year].include?(params[:sort_by]) ? params[:sort_by] : 'title'
  end

  def order
    %w[asc desc].include?(params[:order]) ? params[:order] : 'asc'
  end

  def page
    params[:page] || 1
  end
end
