# {
#   key: auth_key,
#   collections: {
#     Collection1: {
#       object: obj,
#       wigs: [name1, name2...],
#       products: [name1, name2...]
#     }...
#   },
#   wigs: {
#     Wig1: {
#       object: obj,
#       collection: name,
#       products: [name1, name2...]
#     }...
#   },
#   products: {
#     Product1: {
#       object: obj,
#       collection: name,
#       wig: name
#     }...
#   }
# }
json.auth_key ENV['auth_key']
json.auth_secret ENV['auth_secret']

json.collections do
  @collections.each do |collection|
    json.set! collection.name do
      json.object collection
      json.wigs collection.wig_names
      json.products collection.product_names
    end
  end
end

json.wigs do
  @collections.each do |collection|
    collection.wigs.each do |wig|
      json.set! wig.name do
        json.object wig
        json.collection collection.name
        json.products wig.product_names
      end
    end
  end
end

json.products do
  @collections.each do |collection|
    collection.wigs.each do |wig|
      wig.products.each do |product|
        json.set! product.name do
          json.object product
          json.collection collection.name
          json.wig wig.name
        end
      end
    end
  end
end
