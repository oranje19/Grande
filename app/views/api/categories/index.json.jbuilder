@categories.each do |category|
    json.set! category.id do
        json.extract! category, :id, :title, :description, :stories
        # json.story_id category.story_ids
    end
end