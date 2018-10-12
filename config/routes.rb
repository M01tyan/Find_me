Rails.application.routes.draw do
  resources :edits
  get 'about/show' => '/about'
  get 'top/index'
  get 'top/edit'
  get 'top/update'
  root to: 'top#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
