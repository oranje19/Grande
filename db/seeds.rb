# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create({
    username: 'demo_user',
    email: 'demouser@grande.io',
    password: 'demo12345'
})

Category.destroy_all
category1 = Category.create({ title: 'Business' })
category2 = Category.create({ title: 'Economy' })
category3 = Category.create({ title: 'Leadership' })
category4 = Category.create({ title: 'Computer Science' })
category5 = Category.create({ title: 'Self-Improvement' })
category6 = Category.create({ title: 'Venture Capital' })
category7 = Category.create({ title: 'Artificial Intelligence' })
category8 = Category.create({ title: 'Startups' })
category9 = Category.create({ title: 'Blockchain' })
category10 = Category.create({ title: 'Software Engineering' })
category11= Category.create({ title: 'Space' })