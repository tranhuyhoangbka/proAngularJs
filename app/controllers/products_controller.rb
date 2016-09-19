class ProductsController < ApplicationController
  def index
    @products = Product.select :id, :name, :description, :category, :price
    respond_to do |format|
      format.html{}
      format.json{render json: @products}
    end
  end
end
