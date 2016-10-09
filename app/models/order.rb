class Order < ActiveRecord::Base
  # serialize :products, Array
  validates :name, :street, :city, :state, :zip, :country,
    :products, presence: true
end
