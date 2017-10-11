class CreateWig < ActiveRecord::Migration[5.1]
  def change
    create_table :wigs do |t|
      t.string :name
      t.integer :collection_id
    end
  end
end
