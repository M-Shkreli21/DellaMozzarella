class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :menu_item_name, :ingredients, :price, :times_ordered
end
