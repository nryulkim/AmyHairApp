class Api::CollectionsController < ApplicationController
  def index
    @collections = Collection.includes(:wigs, :products)
    render 'index.jbuilder'
  end

  def create
    @collection = Collection.new(collection_params)
    if @collection.save
      render :create
    else
      @errors = @collection.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def destroy
    @collection = Collection.find(params[:id])
    @collection.destroy
    render :destroy
  end

  def update
    @collection = Collection.find(params[:id])
    if @collection
      if @collection.update(collection_params)
        render :update
      else
        @errors = @collection.errors.full_messages
        render json: @errors, status: 422
      end
    else
      render nil, status: 404
    end
  end

  private
  def collection_params
    params.require(:collection).permit(:name)
  end
end
