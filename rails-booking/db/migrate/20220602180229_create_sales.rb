class CreateSales < ActiveRecord::Migration[6.0]
  def change
    create_table :sales do |t|
      t.text :description

      t.timestamps
    end
  end
end
