# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Top.create(name: "前田　幹太", u_name: "会津大学", d_name: "コンピュータ理工", class_id: 1, gender: "男性", birthday: "1998/01/01", graduate: "2020", birthplace: "福岡県", highschool: "私立熊本国府高等学校", licenses: "基本情報技術者", hobby: "音楽")
Message.delete_all
Message.create([
	{user: 'Tom', text: 'Good mornign'},
	{user: 'John', text: 'Good afternoon'},
	{user: 'Emily', text: 'Good evening'}
])