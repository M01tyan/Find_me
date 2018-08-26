class TopController < ApplicationController
  def index
  	@top = Top.find(1)
  end
end
