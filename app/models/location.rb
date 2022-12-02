class Location < ApplicationRecord
  has_many :posts
  has_many :cryptids, through: :posts
  belongs_to :user
end
