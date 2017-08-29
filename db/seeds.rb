# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

1.upto(5_000) do |i|
	Record.create(title: "Record #{i}",
								artist: "Artist #{i}",
								year: i + 2000)
  Game.create(name: "Game #{i}",
              genre: "Genre #{i}",
              publisher: "Publisher #{i}")
end
