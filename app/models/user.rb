class User < ApplicationRecord
    has_secure_password
    has_many :orders
    has_many :reservations, through: :orders

    validates :password, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true
end
