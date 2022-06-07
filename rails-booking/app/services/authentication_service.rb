# coding UTF-8
class AuthenticationService
  attr_reader :params, :session

  def initialize(params, session)
    @params, @session = params, session
  end

  def call
    admin = Admin.find_by_login(params[:login])
    if admin && check_password(params[:password], admin)
      session[:login] = params[:login]
    else
      false
    end
  end

  private

  def check_password(password, admin)
    admin.password == password
  end
end