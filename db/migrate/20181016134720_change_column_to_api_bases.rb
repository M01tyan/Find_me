class ChangeColumnToApiBases < ActiveRecord::Migration[5.2]
  def change
    change_column_null :api_bases, :created_at, true
    change_column_null :api_bases, :updated_at, true
  end
end
