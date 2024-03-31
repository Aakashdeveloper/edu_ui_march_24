if(condition){
    //do something
}else{
    //do something
}

var a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM995:3 Number 10 is even
undefined
var a = 11
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM999:5 Number 11 is odd



var a = 9
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisble by 3`)
}else{
    console.log(`Number ${a} is odd`)
}


////Ternar
> use where we have only one condition

condition ? "if condition is true":"if condition is false"

let ab = 20
ab > 20 ? "Hii":"Bie"
'Bie'
let ab = 21
ab > 20 ? "Hii":"Bie"
'Hii'

let ab = 21
ab > 20 ? ab+1:ab-1
22
let ab = 20
ab > 20 ? ab+1:ab-1
19

