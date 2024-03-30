var city = "LonDON"

city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'
city.length
6
city.charAt(0)
'L'
city.charAt(1)
'o'
city.charAt(9)
''
city.charAt(-1)
''
city.at(0)
'L'
city.at(-1)
'N'
city[city.length-1]
'N'

var name = "  Nikita  "
undefined
name.length
10
name.trim()
'Nikita'
var a = "john"
undefined
var b = "JOhn"
undefined
a == b 
false
a.toLowerCase() == b.toLowerCase()
true

var city = "amSterDam"
undefined
city.slice(1)
'mSterDam'
city.slice(2)
'SterDam'
city.slice(-1)
'm'
city.slice(1.4)
'mSterDam'
city.slice(1,4)
'mSt'
city.slice(0,-2)
'amSterD'



var city = "amSterDam"
city.charAt(0)

var city = "amSterDam"

city.charAt(0)
'a'
city.charAt(0).toUpperCase()
'A'
city.slice(1)
'mSterDam'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'


var city = "pARis"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'