class Contact < ApplicationRecord
  has_many :apartments, through: :apartment_contacts
end
