class CreateActions < ActiveRecord::Migration
  def change
    create_table :actions do |t|
      t.text :desc
      t.integer :done

      t.timestamps null: false
    end
  end
end
