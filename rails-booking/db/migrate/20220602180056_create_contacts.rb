class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.boolean :whats_app
      t.boolean :telegram
      t.boolean :viber

      t.timestamps
    end
  end
end
