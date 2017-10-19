# == Schema Information
#
# Table name: collections
#
#  id   :integer          not null, primary key
#  name :string
#

class Collection < ApplicationRecord
  validates :name, presence: true

  has_many :wigs, dependent: :destroy
end
