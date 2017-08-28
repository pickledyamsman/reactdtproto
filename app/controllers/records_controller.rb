class RecordsController < ApplicationController
  def index
    respond_to do |format|
      format.html {
    	@records = Record.all
      }
      format.json {
      	render json: @records = Record.all
      }
    end
  end

  
end
