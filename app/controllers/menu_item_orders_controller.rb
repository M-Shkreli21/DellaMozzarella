class MenuItemOrdersController < ApplicationController
    #Might take out since join table only for purpose of project.

    def index
        menu_item_orders = MenuItemOrder.all
        render json: menu_item_orders
    end

    def show
        menu_item_order = menu_item_order_find
        render json: menu_item_order
    end

    private

    def menu_item_order_find
        MenuItemOrder.find(params[:id])
    end
end
