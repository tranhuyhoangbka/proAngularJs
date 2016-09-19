class ActionListController < ApplicationController
  respond_to :json
  def index
    @action_list = Action.select(:id, :desc, :done).all
    respond_with @action_list
  end
end
