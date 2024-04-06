var a = [] //array
var b = {} // object

var moviename = "Jab We Met"
var movieRating = 4.6
var movieInd = "Bollywood"

var moviename1 = "Avengers"
var movieRating1 = 4.3
var movieInd1 = "Hollywood"

var movie = {
    name:"Jab We Met",
    rating:4.7,
    ind:"Bollywood"
}

movie.name
'Jab We Met'
movie.rating
4.7
movie.rating= 4.8
4.8
movie
{name: 'Jab We Met', rating: 4.8, ind: 'Bollywood'}
movie.type="Romatic"
'Romatic'
movie
{name: 'Jab We Met', rating: 4.8, ind: 'Bollywood', type: 'Romatic'}
delete movie.rating
true
movie
{name: 'Jab We Met', ind: 'Bollywood', type: 'Romatic'}
movie['name']
'Jab We Met'

///JSON
// JavaScript Object notation
var movies = [
    {
        name:"Jab We Met",
        rating:4.7,
        ind:"Bollywood"
    },
    {
        name:"Avengers",
        rating:4.5,
        ind:"Hollywood"
    }
]
movies[1].name


var movie = {
    name:"Jab We Met",
    rating:4.7,
    ind:"Bollywood"
}

for(key in movie){
    console.log(key)
}
name
rating
ind

for(key in movie){
    console.log(movie[key])
}

Jab We Met
4.7
Bollywood