class CreateEdits < ActiveRecord::Migration[5.2]
  def change
    create_table :edits do |t|
      t.string :user_name
      t.string :phonetic
      t.string :department
      t.string :subject
      t.string :email
      t.string :image
      t.string :facebook
      t.string :github
      t.string :twitter

      t.timestamps
    end
  end
end
