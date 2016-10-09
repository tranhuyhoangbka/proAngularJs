class ProductsController < ApplicationController
  before_action :load_product, only: [:update, :destroy]
  def index
    @products = Product.select :id, :name, :description, :category, :price
    respond_to do |format|
      format.html{}
      format.json{render json: @products}
    end
  end

  def create
    product = Product.new product_params
    if product.save
      render json: product, status: 201, location: product
    else
      render json: {msg: product.errors}, status: 422
    end
  end

  def update
    if @product.update product_params
      render json: @product, status: 200, location: @product
    else
      render json: {mgs: @product.errors}, status: 422
    end
  end

  def destroy
    @product.destroy
    head 204
  end

  private
  def product_params
    params.require(:product).permit :name, :description, :category, :price
  end

  def load_product
    @product = Product.find params[:id]
  end
end
