class CreateMenuItems < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_items do |t|
      t.string :menu_item_name
      t.string :ingredients
      t.integer :price
      t.integer :times_ordered

      t.timestamps
    end
  end
end
