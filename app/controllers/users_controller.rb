class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_user_invalid_error

    def index
        users = User.all
        render json: users
    end

    def show
        user = find_user
        render json: user
    end

    def create
        new_user = User.create!(user_params)
        render json: new_user, status: :created
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = find_user
        user.destroy
        render json: {}
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :password, :phone_number)
    end

    def render_user_not_found_error
        render json: { error: "User not found" }, status: :not_found
    end

    def render_user_invalid_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
