class CryptidSerializer < ActiveModel::Serializer
  attributes :id, :name, :descrition, :image_url
  has_one :user
end
