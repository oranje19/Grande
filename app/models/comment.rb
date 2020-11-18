# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  author_id         :integer          not null
#  story_id          :integer          not null
#  parent_comment_id :integer
#
class Comment < ApplicationRecord
    validates :body, presence: true

    after_initialize :ensure_story_id!

    belongs_to :story ,
        foreign_key: :story_id,
        class_name: :Story
    # inverse_of: :comments

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
        # inverse_of: :comments

    has_many :child_comments,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        primary_key: :id

    belongs_to :parent_comment,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        primary_key: :id,
        optional: true

    private
    def ensure_story_id!
        self.story_id ||= self.parent_comment_id.story_id if parent_comment
    end

end
