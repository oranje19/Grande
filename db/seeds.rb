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
category1 = Category.create({ title: 'Business' , description: 'Business'})
category2 = Category.create({ title: 'Economy' , description: 'Economy' })
category3 = Category.create({ title: 'Leadership', description: 'Leadership' })
category4 = Category.create({ title: 'Computer Science', description: 'Computer Science' })
category5 = Category.create({ title: 'Self-Improvement', description: 'Self-Improvement' })
category6 = Category.create({ title: 'Venture Capital', description: 'Venture Capital' })
category7 = Category.create({ title: 'Artificial Intelligence', description: 'ArtificialIntelligence' })
category8 = Category.create({ title: 'Startups', description: 'Startups' })
category9 = Category.create({ title: 'Blockchain', description: 'Blockchain' })
category10 = Category.create({ title: 'Software Engineering', description: 'Software Engineering' })
category11 = Category.create({ title: 'Space', description: 'Space' })
category12 = Category.create({ title: 'Biotech', description: 'Biotech' })
category13 = Category.create({ title: 'Design', description: 'Design' })
category14 = Category.create({ title: 'Marketing', description: 'Marketing' })
category15 = Category.create({ title: 'Productivity', description: 'Productivity' })
category16 = Category.create({ title: 'Cryptocurrency', description: 'Cryptocurrency' })
category17 = Category.create({ title: 'Cybersecurity', description: 'Cybersecurity' })
category18 = Category.create({ title: 'Data Science', description: 'Data Science' })
category19 = Category.create({ title: 'Machine Learning', description: 'Machine Learning' })
category20 = Category.create({ title: 'Self-Driving Cars', description: 'Self-Driving Cars' })
category21 = Category.create({ title: 'Science', description: 'Science' })
category22 = Category.create({ title: 'Health', description: 'Health' })
category23 = Category.create({ title: 'Lifestyle', description: 'Lifestyle' })
category24 = Category.create({ title: 'Money', description: 'Money' })
category25 = Category.create({ title: 'Travel', description: 'Travel' })
category26 = Category.create({ title: 'Finance', description: 'Finance' })
category27 = Category.create({ title: 'Investing', description: 'Investing' })
category28 = Category.create({ title: 'Education', description: 'Education' })