class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.boolean :giftwrap
      t.text :products

      t.timestamps null: false
    end
  end
end
