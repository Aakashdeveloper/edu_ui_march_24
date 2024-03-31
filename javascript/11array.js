let a = [1,2,3,4,6,353,5,432]  > Array of Number
let b = ["Hiii","Hello","Bie","True"] > Array of String
let c = [true,false,false,true] > Array of Boolean

let d = [1,3,"vd","Dv",235,true,false,332,"efe"]

var city = ["Delhi","Mumbai","Helsinki","Pune","Venice"]
city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[5]
city[city.length-1]
'Venice'


var city = ["Delhi","Mumbai","Helsinki","Pune","Venice"]
undefined
city.push("Boston")
6
city
(6) ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice', 'Boston']
city.push("London")
7
city
(7) ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice', 'Boston', 'London']
city.pop()
'London'
city
(6) ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice', 'Boston']
city.pop(2)
'Boston'
city.unshift('Boston')
6
city
(6) ['Boston', 'Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
city.shift()
'Boston'

Push > Add in the end of Array
pop > Remove last value from the Array
shift > Remove first value from the Array
unshift > Add as first value to array

var city = ['Boston', 'Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
undefined
city.slice(1)
(5) ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
city.slice(2,5)
(3) ['Mumbai', 'Helsinki', 'Pune']


var city = ['Boston', 'Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']

splice(index,deleteCount,values)

// add on index 3
city.splice(3,0,'Amsterdam')

var city = ['Boston', 'Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
undefined
city.splice(3,0,'Amsterdam')
[]
city
(7) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Pune', 'Venice']
city.splice(4,1)
['Helsinki']
city
(6) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Pune', 'Venice']
city.splice(2,1,'Indore')
['Mumbai']
city
(6) ['Boston', 'Delhi', 'Indore', 'Amsterdam', 'Pune', 'Venice']

var city = ['Boston', 'Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
undefined
city.indexOf('Amsterdam')
-1
city.indexOf('London')
-1
city.indexOf('Boston')
0
city.indexOf('Pune')
4