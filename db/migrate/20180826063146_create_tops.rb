class CreateTops < ActiveRecord::Migration[5.2]
  def change
    create_table :tops do |t|
      t.string :name
      t.string :u_name
      t.string :d_name
      t.integer :class_id

      t.timestamps
    end
  end
end
