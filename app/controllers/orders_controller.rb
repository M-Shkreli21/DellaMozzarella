class OrdersController < ApplicationController
    # skip_before_action :check_user
    rescue_from ActiveRecord::RecordNotFound, with: :render_order_not_found_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_order_invalid_error

    def index
        orders = Order.all
        render json: orders
    end

    def show
        order = find_order
        render json: order
    end

    def create
        new_order = Order.create!(order_params)
        render json: new_order, status: :created
    end

    def update
        order = find_order
        order.update!(order_params)
        render json: order, status: :accepted
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy
        render json: {}
    end

    private

    def find_order
        Order.find(params[:id])
    end

    def order_params
        params.permit(:item_name, :user_id, :reservation_id)
    end

    def render_order_not_found_error
        render json: { error: "Order not found" }, status: :not_found
    end

    def render_order_invalid_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
