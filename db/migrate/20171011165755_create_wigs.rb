class CreateWigs < ActiveRecord::Migration[5.1]
  def change
    create_table :wigs do |t|

      t.timestamps
    end
  end
end
