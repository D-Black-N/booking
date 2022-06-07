class CreateApartmentDescriptions < ActiveRecord::Migration[6.0]
  def change
    create_table :apartment_descriptions do |t|
      t.text :welcome
      t.text :rooms
      t.text :amenities
      t.text :check_in_out
      t.text :transfer
      t.text :location
      t.text :attractions
      t.text :baltic
      t.string :airport
      t.text :how_to_get
      t.string :instagram
      t.references :apartment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
