class MessagesController < ApplicationController
	before_action :set_edit, only: [:show, :edit, :update, :destory]
	protect_from_forgery :except => [:create, :update, :destroy]
	skip_before_action :verify_authenticity_token

	def index
		messages = Message.all
		render json: messages
	end

	def create
		message = Message.new(message_params)
		if message.save
			render json: message, status: :create
		else
			render json: message, status: :unprocessable_entity
		end
	end

	def show
		@id = "/messages/" + params[:id]
		render json: @message
	end

	def edit
		@id = "/messages/" + params[:id]
		render json: @messages
	end

	def update
	    if @message.update(message_params)
	      	render json: @message, status: :ok
	    else
	    	render json: message, status: :unprocessable_entity
	    end
	   
	end

	def destroy
		message = Message.find(params[:id])
		message.destroy
		#head :no_content
		#render json: message, status: :ok
		render :template => "sample/index"
	end

	private
		def set_edit
	      @message = Message.find(params[:id])
	    end

		def message_params
			params.permit(:user, :text, :id)
		end

end
