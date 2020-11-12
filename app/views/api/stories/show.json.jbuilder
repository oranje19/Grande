json.extract! @story, :id, :title, :body, :author_id, :category_id, :updated_at
json.author @story.author.username
json.category @story.category.title

# json.extract! @comments, :id, :body, :author_id, :story_id, :parent_comment_id

all_comments = @story.comments_by_parent
comment_authors = @story.comment_authors

#json.all_comments @story.comments_by_parent
#json.comment_authors @story.comment_authors

json.all_comments all_comments
json.comment_authors comment_authors