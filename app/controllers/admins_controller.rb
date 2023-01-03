class AdminsController < ApplicationController
    # skip_before_action :check_admin, only: [:create]
    # rescue_from ActiveRecord::RecordNotFound, with: :render_admin_not_found_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_admin_invalid_error

    def index
        admins = Admin.all
        render json: admins
    end

    def show
        admin = Admin.find_by(id: session[:admin_id])
        if admin
            render json: admin
        else
            render json: { message: "Not Logged in" }, status: :unauthorized
        end
    end

    def create
        admin = Admin.create!(admin_params)
        session[:admin_id] = admin.id
        render json: admin, status: :created
    end

    # def update
    #     admin = find_admin
    #     admin.update!(admin_params)
    #     render json: admin, status: :accepted
    # end

    # def destroy
    #     admin = find_admin
    #     admin.destroy
    #     render json: {}
    # end

    private

    # def find_admin
    #     Admin.find(params[:id])
    # end

    def admin_params
        params.permit(:username, :email, :password)
    end

    # def render_admin_not_found_error
    #     render json: { error: "Admin not found" }, status: :not_found
    # end

    def render_admin_invalid_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
