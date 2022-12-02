class CreateCryptids < ActiveRecord::Migration[6.1]
  def change
    create_table :cryptids do |t|
      t.string :name
      t.text :descrition
      t.string :image_url
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
