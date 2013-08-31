class CreateGistFiles < ActiveRecord::Migration
  def change
    create_table :gist_files do |t|
      t.string :name
      t.text :body
      t.integer :gist_id

      t.timestamps
    end
  end
end
