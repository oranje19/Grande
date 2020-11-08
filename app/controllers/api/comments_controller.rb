class CommentsController < ApplicationController
    
    def show
        @comment = Comment.includes(:author).find(params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.upadate(comment_params)
            render :show
            return
        else
            render json: @comment.errors.full_messages, status: 422
            return
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :journal_id, :parent_comment_id)
    end

end
