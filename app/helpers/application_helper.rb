module ApplicationHelper
  def current_user
    return unless session[:user_id]
    User.find_by_id session[:user_id]
  end

  def logged_in?
    current_user.present?
  end
end
