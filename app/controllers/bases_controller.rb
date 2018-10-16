class BasesController < ApplicationController
	before_action :set_edit, only: [:show, :edit, :update, :destory]
	protect_from_forgery :except => [:create, :update, :destroy]
	skip_before_action :verify_authenticity_token

	def index
		base = Basis.all
		render json: base
	end

	def create
		base = Basis.new(base_params)
		if base.save
			render json: base, status: :create
		else
			render json: base, status: :unprocessable_entity
		end
	end

	def show
		@id = "/bases/" + params[:id]
		render json: @base
	end

	def edit
		@id = "/bases/" + params[:id]
		render json: @bases
	end

	def update
	    if @base.update(base_params)
	      	render json: @base, status: :ok
	      	#redirect_to "/"
	    else
	    	render json: base, status: :unprocessable_entity
	    end
	   
	end

	def destroy
		base = Basis.find(params[:id])
		base.destroy
		#head :no_content
		#render json: base, status: :ok
		render :template => "sample/index"
	end

	private
		def set_edit
	      @base = Basis.find(params[:id])
	    end

		def base_params
			params.permit(:name, :furigana, :university, :department, :subject, :graduate_year, :email, :tel, :github, :facebook, :twitter)
		end

end
