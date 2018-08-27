class AddColumnTop < ActiveRecord::Migration[5.2]
  def change
  	add_column :tops, :gender, :string
  	add_column :tops, :birthday, :string
  	add_column :tops, :graduate, :string
  	add_column :tops, :birthplace, :string
  	add_column :tops, :highschool, :string
  	add_column :tops, :licenses, :string
  	add_column :tops, :hobby, :string
  end
end
