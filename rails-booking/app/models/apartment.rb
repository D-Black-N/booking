class Apartment < ApplicationRecord
  has_one :apartment_description, dependence: :destroy
  has_many :contacts, through: :apartment_contacts, source: :join_association_table_foreign_key_to_contacts_table
  has_many :contacts

end
