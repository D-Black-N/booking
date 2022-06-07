# coding UTF-8
class AdminController < ApplicationController
  before_action :check_login
  
  def create
    admin = Admin.new(admin_params)
    render json: { login: admin.login } if admin.save
    render json: admin.errors if admin.errors.any?
  end

  def update
    admin = Admin.find_by(id: params[:id])
    render status: :ok if admin.update(admin_params)
    render json: admin.errors if admin.errors.any?
  end

  def show
    admin = Admin.find_by_id(params[:id])
    render json: { login: admin.login, email: admin.email } if admin
    render json: :no_content if admin.nil?
  end

  def destroy
    if Admin.all.count > 1
      Admin.find_by_login(session[:login]).destroy
      render status: :no_content
    else
      render json: 'Last admin account, do not delete it', status: :not_acceptable
    end
  end

  private

  def admin_params
    params.require(:admin).permit(:login, :email, :password, :password_confirmation)
  end
end
