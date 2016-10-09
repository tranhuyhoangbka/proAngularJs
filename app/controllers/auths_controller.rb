class AuthsController < ApplicationController
  layout false

  respond_to :json

  def create
    user = User.find_by_email(params[:email])
    return render json: {error: 'email or password is invalid'}, status: 401 unless user
    if user.valid_password?(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: {error: 'email or password is invalid'}, status: 401
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {msg: "Logout Success!"}
  end
end
