class Cryptid < ApplicationRecord
  has_many :posts
  has_many :locations, through: :posts
  belongs_to :user
end
