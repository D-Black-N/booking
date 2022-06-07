Rails.application.routes.draw do
  get 'sales/index'
  get 'sales/new'
  get 'sales/create'
  get 'sales/edit'
  get 'sales/update'
  get 'sales/destroy'
  get 'reserves/index'
  get 'reserves/new'
  get 'reserves/show'
  get 'reserves/create'
  get 'reserves/edit'
  get 'reserves/update'
  get 'reserves/destroy'

  resources :admin, only: [:create, :update, :show, :destroy]

  resources :session, only: [:create, :destroy]

  resources :apartments

  resources :contacts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
