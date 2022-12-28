class MenuItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_menu_item_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_menu_item_invalid_error

    def index
        menu_items = MenuItem.all
        render json: menu_items
    end

    def show
        menu_item = find_menu_item
        render json: menu_item
    end

    def create
        new_menu_item = MenuItem.create!(menu_item_params)
        render json: new_menu_item, status: :created
    end

    def update
        menu_item = find_menu_item
        menu_item.update!(menu_item_params)
        render json: menu_item, status: :accepted
    end

    def destroy
        menu_item = find_menu_item
        menu_item.destroy
        render json: {}
    end

    private

    def find_menu_item
        MenuItem.find(params[:id])
    end

    def menu_item_params
        params.permit(:menu_item_name, :ingredients, :price)
    end

    def render_menu_item_not_found
        render json: { error: "Menu Item Not Found" }, status: :not_found
    end

    def render_menu_item_invalid_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
