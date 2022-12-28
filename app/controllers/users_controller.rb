class UsersController < ApplicationController
    skip_before_action :check_user, only: [:create]

    rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_user_invalid_error

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { message: "Not Logged in" }, status: 404
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # def update
    #     user = find_user
    #     user.update!(user_params)
    #     render json: user, status: :accepted
    # end

    # def destroy
    #     user = find_user
    #     user.destroy
    #     render json: {}
    # end

    private

    # def find_user
    #     User.find(params[:id])
    # end

    def user_params
        params.permit(:name, :email, :password, :phone_number)
    end

    def render_user_invalid_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
