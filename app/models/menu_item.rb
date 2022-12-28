class MenuItem < ApplicationRecord
    has_many :menu_item_orders
    has_many :orders, through: :menu_item_orders

    validates :menu_item_name, presence: true
    validates :ingredients, presence: true
    validates :price, presence: true
end
