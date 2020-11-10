json.extract! @story, :id, :title, :body, :category_id, :updated_at
json.author @story.author.username
json.category @story.category.title

all_comments = @story.comments_by_parent
comment_authors = @story.comment_authors

json.all_comments all_comments
json.comment_authors comment_authors