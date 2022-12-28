class SessionsController < ApplicationController
    skip_before_action :check_user, only: [:create]
    skip_before_action :check_admin, only: [:create_admin_session]

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: "Username or Password invalid" }, status: 403
        end
    end

    def create_admin_session
        admin = Admin.find_by(username: params[:username])
        if admin && admin.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin
        else
            render json: { errors: "Username or Password Invalid" }, status: 403
        end
    end

    def destroy_admin_session
        session.delete :admin_id
        render json: { message: "You've been logged out" }
    end

    def destroy
        session.delete :user_id
        render json: { message: "You've been logged out" }
    end
end
