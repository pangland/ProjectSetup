json.restaurants @restaurants.each do |restaurant|
  json.extract! restaurant, :id, :name, :cuisine, :rating
end