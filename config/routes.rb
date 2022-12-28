Rails.application.routes.draw do
  
  resources :users
  resources :reservations
  resources :orders
  resources :menu_items
  resources :menu_item_orders, only: [:index, :show]
  resources :admins

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  get "/admin_me", to: "admins#show"
  post "admin_signup", to: "admins#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
