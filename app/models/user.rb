class User < ApplicationRecord
    has_secure_password
    has_many :orders
    has_many :reservations, through: :orders

    validates :password, presence: true
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :phone_number, presence: true
end
