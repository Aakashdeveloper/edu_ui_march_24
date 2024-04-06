Map
> Map help to itrate over the data

var a = [3,5,6,2,6,8,3,7]
a.map((data) => {return data*2})
[6, 10, 12, 4, 12, 16, 6, 14]


Filter 
> To Filter out the values

var a = [3,5,6,2,6,8,3,7]
a.filter((data) => {return data>5})
[6, 6, 8, 7]


var a = [3,5,6,2,6,8,3,7]
a.map((data) => {return data>5})
[false, false, true, false, true, true, false, true]