class CreateReserves < ActiveRecord::Migration[6.0]
  def change
    create_table :reserves do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.date :check_in
      t.date :check_out
      t.integer :status
      t.references :apartment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
