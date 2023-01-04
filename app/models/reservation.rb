class Reservation < ApplicationRecord
    has_many :orders
    has_many :users, through: :orders

    validates :date, presence: true
    validates :user_id, presence: true
end
