class ApplicationController < ActionController::API
  # before action :check_user
  # before action :check_admin
  include ActionController::Cookies

  def check_user
    unless current_user render json: { message: "Not Authorized" }, status: :unauthorized
    end
  end

  def check_admin
    unless current_admin render json: { message: "Not Authorized" }, status: :unauthorized
    end
  end

  def authorize
    !!current_user
  end

  def authorize_admin
    !!current_admin
  end

  def current_admin
    Admin.find_by(id: session[:admin_id])
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end
