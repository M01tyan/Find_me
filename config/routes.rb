Rails.application.routes.draw do
  resources :messages, only: [:index, :create, :update, :show, :destroy], format: 'json'
  get 'sample/index'
  get 'sample/show'
  resources :sample
  resources :edits
  get 'about/show' => '/about'
  get 'top/index'
  get 'top/edit'
  get 'top/update'
  root to: 'top#index'
  resources :tops
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
