class AdminsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_admin_not_found_error
rescue_from ActiveRecord::RecordInvalid, with: :render_admin_invalid_error

    def index
        admins = Admin.all
        render json: admins
    end

    def show
        admin = find_admin
        render json: admin
    end

    def create
        new_admin = Admin.create!(admin_params)
        render json: new_admin, status: :created
    end

    def update
        admin = find_admin
        admin.update!(admin_params)
        render json: admin, status: :accepted
    end

    def destroy
        admin = find_admin
        admin.destroy
        render json: {}
    end

    private

    def find_admin
        Admin.find(params[:id])
    end

    def admin_params
        params.permit(:name, :email, :password)
    end

    def render_admin_not_found_error
        render json: { error: "Admin not found" }, status: :not_found
    end

    def render_admin_invalid_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
