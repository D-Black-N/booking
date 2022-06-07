# coding UTF-8
class Admin < ApplicationRecord
  VALID_PASSWORD_REGEXP = //
  VALID_EMAIL_REGEXP = /$\w[\w\d]*@\w+\.\w{2,4}/

  validates :login, length: { minimum:4, maximum:10 }
  validates :password, length: { minimum:8, maximum:20 }, format: { with: VALID_PASSWORD_REGEXP } 
  validates :email, format: { with: VALID_EMAIL_REGEXP }

  has_encrypted_password
end