class SampleController < ApplicationController
  def index
  end

  def show
  	@id = "/messages/" + params[:id]
  end

  def edit
  	@id = "/messages/" + params[:id]
  end

  def destory
  	message = Message.find(params[:id])
  	message.destroy
  end
end
