Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :destroy] do
      resources :stories, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :stories, only: [:index, :create, :show, :destroy, :update]
    resources :categories, only: [:index, :show] do
      resources :stories, only: [:index]
    end


    post '/users/:id/follow', to: "users#follow", as: "follow_user"
    post '/users/:id/unfollow', to: "user#unfollow", as: "unfollow_user"
  
  
    resources :comments, :only: [:show, :create, :update, :destroy]

  end

  root "static_pages#root"
end
