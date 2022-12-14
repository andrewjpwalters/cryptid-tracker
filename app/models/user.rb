class User < ApplicationRecord
    has_many :posts
    has_many :locations
    has_many :cryptids

    has_secure_password
end
