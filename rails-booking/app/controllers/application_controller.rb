# coding UTF-8
class ApplicationController < ActionController::API
  def check_login
    !session[:login].nil?
  end
end
