class OrderSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :user_id, :reservation_id
end
