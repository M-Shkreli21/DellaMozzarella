Rails.application.routes.draw do
  
  resources :users
  resources :reservations
  resources :orders
  resources :menu_items
  resources :menu_item_orders, only: [:index, :show]
  resources :admins
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
