# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

MenuItem.create(menu_item_name: "Fresh Mozzarella", ingredients: "Water, Milk, Salt", price: 10, times_ordered: 0)
MenuItem.create(menu_item_name: "Chicken Parmesan", ingredients: "Breaded Chicken Cutlet, Mozzarella Cheese, Marinara Sauce", price: 50, times_ordered: 0)
MenuItem.create(menu_item_name: "Chicken Francese", ingredients: "Breaded Chicken Cutlet, White Wine, Butter, Lemon", price: 45, times_ordered: 0)
MenuItem.create(menu_item_name: "Penne Vodka", ingredients: "Penne Pasta, Vodka Sauce, Bacon Bits", price: 40, times_ordered: 0)
MenuItem.create(menu_item_name: "Gnocchi Bolognese", ingredients: "Potatoe Gnocchi, Ground Meat, Tomato Sauce", price: 35, times_ordered: 0)
MenuItem.create(menu_item_name: "Fried Calamari", ingredients: "Fried Squid, Lemon, Marinara Sauce ", price: 30, times_ordered: 0)