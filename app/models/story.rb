# == Schema Information
#
# Table name: stories
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  body        :string           not null
#  author_id   :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Story < ApplicationRecord
    validates :title, :body, presence: true
    validates :author_id, :category_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :category

    # def comment_by_authors
        
    # end


end
