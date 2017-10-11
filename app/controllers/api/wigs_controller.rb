class Api::WigsController < ApplicationController
  def create
    @wig = Wig.new(wig_params)
    if @wig.save
      render :create
    else
      @errors = @wig.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def destroy
    @wig = Wig.find(params[:id])
    @wig.destroy
    render :destroy
  end

  def update
    @wig = Wig.find(params[:id])
    if @wig
      if @wig.update(wig_params)
        render :update
      else
        @errors = @wig.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end

  private
  def wig_params
    params.require(:wig).permit(:name, :collection_id)
  end
end
