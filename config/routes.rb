Rails.application.routes.draw do
  # get 'groups/index'
  devise_for :users
  root to: "groups#select"

  resources :users, only:  [:edit, :update]
  resources :groups, only: [:index, :new, :create, :destroy, :edit] do
    
    collection do 
     get 'select'
     get 'video'
    end
    resources :messages, only: [:index, :create]
    # get 'messages/:id', to: 'messages#checked'
  end
end
