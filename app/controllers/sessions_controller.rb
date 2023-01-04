class SessionsController < ApplicationController
    skip_before_action :check_user, only: [:create]

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: "Username or Password invalid" }, status: 403
        end
    end

    def destroy
        session.delete :user_id
        render json: { message: "You've been logged out" }
    end
end
