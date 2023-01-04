class OrderSerializer < ActiveModel::Serializer
  attributes :item_name, :user_id, :reservation_id
end
