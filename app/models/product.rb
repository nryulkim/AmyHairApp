# == Schema Information
#
# Table name: products
#
#  id     :integer          not null, primary key
#  name   :string
#  wig_id :integer
#

class Product < ApplicationRecord
  validates :name, :wig_id, presence: true

  belongs_to :wig
end
