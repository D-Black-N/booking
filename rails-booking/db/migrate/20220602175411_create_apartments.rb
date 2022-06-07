class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :name
      t.integer :max_person
      t.integer :rooms_number
      t.boolean :beach
      t.boolean :animals
      t.boolean :childs
      t.integer :price

      t.timestamps
    end
  end
end
