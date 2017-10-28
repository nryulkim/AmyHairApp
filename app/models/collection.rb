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
  has_many :products, through: :wigs

  def product_names
    names = []
    for product in self.products do
      names.push(product.name)
    end
    return names
  end

  def wig_names
    names = []
    for wig in self.wigs do
      names.push(wig.name)
    end
    return names
  end
end
