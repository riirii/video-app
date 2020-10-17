class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.text :content,                     null: false
      t.references :user,                  foreign_key: true,null: false
      t.boolean :checked
      t.references :group,                 foreign_key: true,null: false
      t.timestamps
    end
  end
end