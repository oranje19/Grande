class Api::StoriesController < ApplicationController

    #this is for testing only: take out of production
    # skip_before_action :verify_authenticity_token

    def index
        if params[:user]
            @stories = Story.where(author_id: params[:user_id]).includes(:author, :category)
        elsif params[:category_id]
            @stories = Story.where(category_id: params[:category_id]).includes(:author, :category)
        else
            @stories = Story.all.includes(:author, :category)
        end
        
        render :index
    end

    def show
        @story = Story.includes(:author, :category).find(params[:id])
        # @comments = Comment.where(story_id: @story.id )
        render :show
    end

    def create
        @story = Story.new(story_params)
        @story.author_id = current_user.id
        
        if @story.save
            render :show
        else
            render json: @story.errors.full_messages, status: 422
        end
    end

    def update
        @story = Story.find(params[:id])
        if @story.author_id == current_user.id
            if @story.update(story_params)
                render :show
            else
                render json: @story.errors.full_messages, status: 422
            end
        else
            render json: ["You can't update this story"], status: 401
        end
    end

    def destroy
        @story = Story.find(params[:id])
        if @story.author_id = current_user.id
            @story.destroy
        else
            render json: ["You can't delete this story"], status: 422
        end
    end

    private

    def story_params
        params.require(:story).permit(:title, :body, :category_id)
    end

end
