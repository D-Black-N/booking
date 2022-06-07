# coding UTF-8
class SessionController < ApplicationController
  def create
    session = AuthenticationService.new(params, session)
    render json: session if session
    render status: :unauthorized
  end

  def destroy
    session[:login] = nil
    render json: :no_content
  end
end
