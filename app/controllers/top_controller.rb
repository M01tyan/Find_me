class TopController < ApplicationController
  def index
  	@top = Top.find(1)
  end

  def edit
  	@top = Top.find(1)
  end
end
