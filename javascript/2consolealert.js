console.log()  >> For checking output as well as debugging
alert() > Notification
confirm() > To check weather true or false
prompt() > to take any input from user


alert("Form Submitted")
alert("No Slot Left")
undefined
confirm("Do you want to leave")
true
confirm("Do you want to leave")
false
var a = confirm("Do you want to leave")
undefined
a
true
var a = confirm("Do you want to leave")
undefined
a
false


prompt("What is your age")
'10'
var name = prompt("What is your name")
undefined
name
'Aakash'

var a = prompt("Enter First value")
var b  = prompt("Enter Second value")
var c = a+b
c
'1020'


var a = "10"
var b = "20"
undefined
a+b
'1020'
parseInt(a)
10
parseInt(b)
20
parseInt(a)+parseInt(b)
30
parseInt(a+b)
1020
var a = "10.22"
undefined
var b = "20.11"
undefined
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.33


var a = "10a11"

parseInt(a)
10

var a = "b10a11"
parseInt(a)
NaN

var b = "hi"
parseInt(b)
NaN


//es6
var a = "10a11"
undefined
Number(a)
NaN
var a = "b10a11"
undefined
Number(a)
NaN
var b = "hi"
Number(b)
NaN
var a = "10"
var b = "20"
undefined
Number(a)+Number(b)
30