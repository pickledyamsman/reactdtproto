Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
  	namespace :v1 do
  		resources :records do
  			get :search, on: :collection
  		end
  	end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
