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

    has_many :comments,
        foreign_key: :story_id,
        class_name: :Comment,
        inverse_of: :story

    # def comment_by_authors
        
    # end


    def comments_by_parent
        comments_by_parent = Hash.new { |hash, key| hash[key] = [] }

        # parentStories = self.comments.includes(:parent_comment)
        # puts parentStories
        # byebug
        # parentStories.each do |comment|
        #     comments_by_parent[comment.parent_comment_id] << comment
        # end

        self.comments.includes(:parent_comment).each do |comment|
            comments_by_parent[comment.parent_comment_id] << comment
        end

        comments_by_parent
    end

    def comment_authors
        comment_authors =  Hash.new 

        self.comments.includes(:author).each do |comment|
            comment_authors[comment.author.id] = comment.author.username
        end
        comment_authors
    end

end
