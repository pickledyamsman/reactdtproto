class CreateRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :records do |t|
      t.string :title
      t.string :artist
      t.integer :year

      t.timestamps
    end
  end
end
