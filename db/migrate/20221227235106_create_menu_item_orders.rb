class CreateMenuItemOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_item_orders do |t|
      t.integer :order_id
      t.integer :menu_item_id

      t.timestamps
    end
  end
end
