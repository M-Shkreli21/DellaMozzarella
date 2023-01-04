class ApplicationController < ActionController::API
  before_action :check_user

  include ActionController::Cookies

  def check_user
    unless current_user 
      render json: { message: "Not Authorized" }, status: :unauthorized
    end
  end

  def authorize
    !!current_user
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end
