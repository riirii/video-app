Rails.application.routes.draw do
  # get 'groups/index'
  devise_for :users
  root to: "groups#select"

  resources :users, only:  [:edit, :update]
  resources :groups, only: [:index, :show, :new, :create, :destroy, :edit] do
    collection do 
     get 'select'
     get 'video'
    end
 end
end
