# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

collections = {
  'Benewig Collection': {
    'Benewig Full Wig': [
      'Alicia', 'Halle_1', 'Keyshia', 'Mary', 'Nicki'
    ]
    'Benewig Lace Wig': [
      'Ariana', 'Beyonce', 'Ciara2', 'Gina', 'Janet', 'Jetty', 'Kess',
      'Mariah', 'Mya', 'Nana', 'Rihanna', 'Tama', 'Tyra', 'Whiteney'
    ]
  }
  'Indu Gold': {
    'Indu Gold Full Wig': ['Lena']
    'Indu Gold Lace Wig': [
      'Amery', 'Chanel', 'Cleo', 'Coco', 'Emma', 'Rhona', 'Ricca',
      'Roma', 'Rose', 'Ruby', 'Sista', 'Sofia', 'Tess', 'Tiara', 'Vera',
      'Vicky'
    ]
  }
}

Collection.destroy_all
for name in collections.keys do
  collection = Collection.create({ name: name })
  wigs = collections[name]
  for wig in wigs.keys do
    wigobj = Wig.create({ name: wig, collection_id: collection.id })
    for product in wigs[wig] do
      Product.create({ name: product, wig_id: wigobj.id })
    end
  end
end
