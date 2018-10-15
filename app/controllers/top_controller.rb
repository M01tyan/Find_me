class TopController < ApplicationController
  def index
  	@top = Top.find(1)
  end

  def edit
  	@top = Top.find(1)
  end

  def new
    @edit = Edit.new
  end

  def create
    @top = Top.new(edit_params)

    respond_to do |format|
      if @top.save
        format.html { redirect_to @top, notice: 'Edit was successfully created.' }
        format;js 
        format.json { render json: @top }
      else
        format.html { render :new }
        format.json { render json: @top.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @edit.update(edit_params)
        format.html { redirect_to @top, notice: 'Edit was successfully updated.' }
        format.js
        format.json { render json: @top }
      else
        format.html { render :top }
        format.json { render json: @top.errors, status: :unprocessable_entity }
      end
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_edit
      @edit = Edit.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def edit_params
      params.require(:top).permit(:name)
    end

end
