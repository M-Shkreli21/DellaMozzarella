class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.date :date
      t.time :time
      t.integer :user_id
      t.boolean :approved

      t.timestamps
    end
  end
end
