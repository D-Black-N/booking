# coding UTF-8
class Reserve < ApplicationRecord
  belongs_to :apartment

  enum status: { created: 1, reserved: 2, cancel: 3 }

  validates DateValidator

end
