var a = 10
var b = 20
a+b
30

////
keyword nameoffunction(parameters){
    return value
}


function add(a,b){
    return a+b
}
undefined
add(3,5)
8
add(4,1)
5
add("hii","test")
'hiitest'

add(3)
NaN
add(3,1,1)
4


function isEven(userInput){
    let out = ''
    if(userInput % 2 == 0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }

    return out
}

isEven(10)
'Number 10 is even'
isEven(11)
'Number 11 is odd'

////////////es6
let add = (a,b) => {return a+b}

add(1,2)
3