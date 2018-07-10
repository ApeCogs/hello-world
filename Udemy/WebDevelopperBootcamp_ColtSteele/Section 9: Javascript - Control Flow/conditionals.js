var age = prompt("whats your age");

if (age < 0){
    console.log("error")
}
else if (age % 2 !== 0) {
    console.log("your age is odd")
}
else if (age < 18 ) {
    console.log("Sorry, you are not old enough to enter the venue")
}
else if (age < 21) {
    console.log("You can enter, but you can't get your drink in")
}

else if (age === 21) {
    console.log("Felix Compleanos")
}

else {
    console.log("1 tequila, 2 tequila, 3 tequila, floor!")
}