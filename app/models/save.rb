class Save < ApplicationRecord
  validates :user_id, :listing_id, presence: true

  belongs_to :user

  belongs_to :listing,
  foreign_key: :listing_id,
  class_name: :Listing
end
