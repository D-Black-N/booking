class CreateApartmentContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :apartment_contacts do |t|
      t.references :contact, null: false, foreign_key: true
      t.references :apartment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
