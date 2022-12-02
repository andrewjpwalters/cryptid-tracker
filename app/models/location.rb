class Location < ApplicationRecord
  has many :posts
  has many :cryptids, through: :posts
  belongs_to :user
end
