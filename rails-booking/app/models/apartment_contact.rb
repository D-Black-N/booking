class ApartmentContact < ApplicationRecord
  belongs_to :contact
  belongs_to :apartment
end
