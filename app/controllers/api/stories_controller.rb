class Api::StoriesController < ApplicationController
    def index
        
    end

    def show

    end

    def create

    end

    def update

    end

    def destroy

    end

    private

    def story_params
        params.require(:story).permit(:title, :body, :category_id)
    end

end
