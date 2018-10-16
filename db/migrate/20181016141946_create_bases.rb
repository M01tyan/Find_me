class CreateBases < ActiveRecord::Migration[5.2]
  def change
    create_table :bases do |t|
      t.string :name
      t.string :furigana
      t.string :university
      t.string :department
      t.string :subject
      t.integer :graduate_year
      t.string :email
      t.string :tel
      t.string :github
      t.string :facebook
      t.string :twitter

      t.timestamps
    end
  end
end
