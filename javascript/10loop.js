it help to generate a series of value as well as iterate over th Array

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

for(let i=0;i<10;i+=2){
    console.log(i)
}
0
2
4
6
8

for(let i = 10; i>=0; i-=2){
    console.log(i)
}
10
8
6
4
2
0


var city = ['Boston', 'Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
for(i=0;i<city.length;i++){
    console.log(city[i])
}

var city = ['Boston', 'Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
for(mycity  of city){
    console.log(mycity)
}