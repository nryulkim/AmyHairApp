# == Schema Information
#
# Table name: wigs
#
#  id            :integer          not null, primary key
#  name          :string
#  collection_id :integer
#

class Wig < ApplicationRecord
  validates :name, :collection_id, presence: true

  belongs_to :collection
end
