class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :user_id, :approved

  has_many :orders
end
