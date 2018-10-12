class TopController < ApplicationController
  def index
  	@top = Top.find(1)
  end

  def edit
  	@top = Top.find(1)
  end

  def update
    respond_to do |format|
      if @top.update(top_params)
        format.html { redirect_to @top, notice: 'Edit was successfully updated.' }
        format.json { render :index, status: :ok, location: @top }
      else
        format.html { render :index }
        format.json { render json: @top.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_edit
      @top = Top.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def edit_params
      params.require(:top).permit(:name, :u_name, :d_name, :class_id)
    end
end
