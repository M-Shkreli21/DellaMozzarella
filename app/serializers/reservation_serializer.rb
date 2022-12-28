class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :user_id, :approved
end
