class Order < ApplicationRecord
    belongs_to :user
    belongs_to :reservation
    has_many :menu_item_orders
    has_many :menu_items, through: :menu_item_orders

    validates :item_name, presence: true
    validates :user_id, presence: true
    validates :reservation_id, presence: true
end
