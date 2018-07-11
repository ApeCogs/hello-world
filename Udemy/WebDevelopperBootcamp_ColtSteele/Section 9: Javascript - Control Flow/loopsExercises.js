//PRINT ALL NUMBERS BETWEEN -10 and 19

console.log("EXERCISE #1")
console.log("===========")

for(var i = -10; i < 20; i++) {
    console.log(i);
}

//PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40

console.log("EXERCISE #2")
console.log("===========")

for(var i = 10; i < 41; i+=2){
    console.log(i);
}

//PRINT ALL ODD NUMBERS BETWEEN 300 AND 333

console.log("EXERCISE #3")
console.log("===========")

for(var i = 301; i < 334; i+=2){
    console.log(i);
}

//PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50

console.log("EXERCISE #4")
console.log("===========")

for(var i = 5; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}
