class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
    add_index :stories, :author_id
    add_index :stories, :category_id
  end
end
