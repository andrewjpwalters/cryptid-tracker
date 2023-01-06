class PostsController < ApplicationController
    def index
        render json: Post.all
    end

    def create
        post = @current_user.posts.create!(cryptid_params)
        render json: post, status: created
    end

    private

    def post_params
        params.permit(:comment, :cryptid_id, :location_id)
    end
end
