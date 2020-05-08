class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
        render :index
    end

    def show
        @category = Category.includes(:stories).find(params[:id])
        render :show
    end

    def create
        @category = Category.new(category_params)

        if !@category.save
            render json:@category.errors.full_messages, status: 422

        end

    end

    private

    def category_params
        params.require(:category).permit(:title, :description)
    end


end
