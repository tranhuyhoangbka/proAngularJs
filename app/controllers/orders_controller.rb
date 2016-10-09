class OrdersController < ApplicationController
  respond_to :json

  def index
    respond_with Order.all
  end

  def create
    order = Order.new order_params
    if order.save
      render json: order
    else
      binding.pry
      render json: {error: "Error to create order"}, status: 422
    end
  end

  private
  def order_params
    params.require(:order).permit(:name, :street, :city,
      :state, :zip, :country, :giftwrap, :products)
  end
end
