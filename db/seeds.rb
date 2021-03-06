# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
users = []
# User.create!(username: 'invisible', password: 'passwordo')
users.push(User.create!(username: 'Guest', password: 'unguessable_password'))
users.push(User.create!(username: 'Paul', password: 'password'))
users.push(User.create!(username: 'John', password: 'password'))
users.push(User.create!(username: 'Mark', password: 'password'))


Restaurant.destroy_all
Slot.destroy_all
Reservation.destroy_all
#
# cuisine = ['American', 'Chinese', 'French', 'Italian', 'Japanese', 'Mexican', 'Pizza']


useful_restaurants = []

useful_restaurants.push(Restaurant.create(name: 'Yukirhira', cuisine: 'Japanese', description: 'Japanese cuisine with a bent toward unpretentious yet well-cooked food that can be enjoyed by the masses quickly. Head chef Doumo Yukihira is a born experimental and explorer of cuisine, so his "specials of the month" feature flavors from around the world.', price: "0", rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/v1506575117/stock-photo-food-japan-overhead-ramen-ramen-noodles-famous-ramen-ramen-lovers-b25eff72-e8ff-4628-ad81-5218f08dd7df_wzsxwo.jpg", hours: "1"));

useful_restaurants.push(Restaurant.create(name: 'Green Dragon', description: 'Top-rated sushi restaurant in Akihabara for four years running. Head Chef Takanori Hatsu comes from a family of prestigious sushi chefs and continues to improve upon their long-honed techniques in this humble shop near the Shibuyashi train station.', cuisine: 'Japanese', price: "3", rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/v1506574883/pexels-photo-271715_g6u1js.jpg", hours: "0"));

useful_restaurants.push(Restaurant.create(name: 'American Burger', description: "Home to the self proclaimed 'best Western burger south of 1000 yen'. The affordable burgers do not lack in heft, and are made using fresh ingredients. Barbeque sauce is prominently featured on the menu.", cuisine: 'American', price: "3", rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/v1506575293/pexels-photo-103886_lvcejq.jpg", hours: "1"));

useful_restaurants.push(Restaurant.create(name: "Tian Chinese Comfort", description: "Delicious Chinese food. At Tian's we believe that our food is our culture and we are eager to share it! Try our Kung Pao chicken, our thai chicken curry, and whatever else you like. The dishes are intended to be shared, since that way the whole family can enjoy the whole meal. We also serve a wide variety of traditional Chinese dishes so that whether you're a born-and-bred American or a Chinese immigrant looking for an authentic taste of home, this restaurant is the place for you!", cuisine: 'Chinese', price: "1", rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/v1506575383/pexels-photo-76093_k55ri9.jpg", hours: "0"));

useful_restaurants.push(Restaurant.create(name: 'Vodka Pizza Pavilion', description: "At this pizzeria, Vodka Pizza isn't the gimmick: it's the main attraction. Restaurant owner Fabio Moretz treats pizza made using vodka sauce with the curiosity and exploration one might imagine early New York restauranters did with their pizzas to try to gain a competitive edge. The topping combinations aren't what you'd expect and the experience isn't quite like regular pizza, but the chef's challenge to orthodoxy has landed him a spot on Forbes' ranking of the nation's 500 Greatest Young Chefs. The restaurant features different toppings and different flavor profiles than can be expected from a normal pizzeria, and the changes are both felt and welcome.", cuisine: 'Pizza', price: "1", rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/v1506575459/pexels-photo-263041_n2974j.jpg", hours: "1"));

useful_restaurants.push(Restaurant.create(name: 'Dominique', description: "Since its opening in late 2015, this Restaurant has stirred a storm in the east coast's gastronomical world. Former sou chef of Daniel's of 3 Michelin Star fame, head chef Dominique Picard opened his own restaurant in the hopes that he could by serving Foie Gras with sweet pumpkin puree, soy-sauce marinated snails, and pastries that defy a normal man's imagination and all naming conventions. It has already been awarded 2 Michelin stars, and most agree a 3rd is inevitable. The Restaurant is undoubtedly the best French-novel Restaurant in the city, and well worth the price.", cuisine: 'French', price: "3", rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/v1506575541/pexels-photo-360940_np3ilb.jpg", hours: "0"));

useful_restaurants.push(Restaurant.create(name: 'El Blanco Toro', description: "Mexican done right. This atmospheric bar in downtown New York serves all the Mexican dishes you enjoy with the flavor and taste that comes from loving the culture and the cuisine. Try the guacamole -- it's not like any other guacamole you've had.", cuisine: 'Mexican', price: "2", rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/v1506575605/food-salad-restaurant-person_cyvmtu.jpg", hours: "1"));

useful_restaurants.push(Restaurant.create(name: "Definitely Ray's Pizza", description: "Definitely Ray’s Pizza has a long and proud history in New York's pizza history. Order by the pie or by the slice, but don't walk away with your food too quickly -- you might end up wanting more!", cuisine: 'Pizza', price: "2", rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/v1506575727/pizza-restaurant-dinner-lunch_zcojm8.jpg", hours: "1"));

useful_restaurants.push(Restaurant.create(name: "Yamasaki no Soba", description: "Authentic soba noodles from an authentic Japanese chef! Be treaed to one of Japan's most treasured comfort foods, prepared for you by a chef who has spent 40 years learning the art of soba preparation and cooking technique!", cuisine: "Japanese", price: '2', rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/v1506575117/stock-photo-food-japan-overhead-ramen-ramen-noodles-famous-ramen-ramen-lovers-b25eff72-e8ff-4628-ad81-5218f08dd7df_wzsxwo.jpg", hours: "1"));

useful_restaurants.push(Restaurant.create(name: "Tacos", description: "Exclusively tacos. Big tacos, small tacos, fish tacos, you name it. But there are no non-taco options and no adjustments.", cuisine: "Mexican", price: '1', rating: 0, image_url: "http://res.cloudinary.com/pangland/image/upload/c_scale,w_4734/v1526528139/photo-1524412529635-a258ed66c010_fygnyb.jpg", hours: "1"));


useful_restaurants.each do |restaurant|
  # time = restaurant.hours == '0' ? '11:00'.to_time : '7:30'.to_time
  time = restaurant.hours == '0' ? DateTime.parse('11:00 -0400') : DateTime.parse('7:30 -0400')
  final_time = restaurant.hours == '0' ? DateTime.parse('10:00 p.m. -0400') : DateTime.parse('9:00 p.m. -0400')
  # final_time = restaurant.hours == '0' ? '10:00 p.m.'.to_time : '9:00 p.m.'.to_time
  # final_time = restaurant.hours == '0' ? '10:00 p.m.'.to_time : '9:00 p.m.'.to_time

  until time == final_time
    Slot.create(restaurant_id: restaurant.id, seats: 2, time: time)
    Slot.create(restaurant_id: restaurant.id, seats: 3, time: time)
    Slot.create(restaurant_id: restaurant.id, seats: 4, time: time)
    time += 30.minutes
  end

  restaurant.slots.each do |slot|
    8.times do |i|
      Reservation.create!(slot_id: slot.id, date: Slot.last.time.to_date + i - 1)
    end
  end

  users.each_with_index do |user, i|
    Reservation.create!(user_id: user.id, slot_id: Slot.last.id, date: Date.today - i)
  end

  Reservation.create!(user_id: users[0].id, slot_id: Slot.last.id, date: Date.today - 6);
end



# (0...50).each do |i|
#   Restaurant.create(name: Faker::Name.name, description: Faker::MostInterestingManInTheWorld.quote, cuisine: cuisine[i % cuisine.length],
#   price: (i % 4).to_s, rating: 0, image_url: "MRW.jpg", hours: (i % 2).to_s);
# end
