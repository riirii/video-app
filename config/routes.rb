Rails.application.routes.draw do
  # get 'groups/index'
  root to: "groups#select"
  devise_for :users

  resources :groups, only: [:index, :show, :new, :create, :destroy, :edit] do
    collection do 
     get 'select'
    end
 end
end
