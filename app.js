console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(let i = 1; i <= count; i++){
        if (i % 2 !== 0){
            console.log(i);
        }
    }
}

printOdds(100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge (name, age){
    let aboveSixteen = 'Congrats ${name}! you can drive!';
    let belowSixteen = 'Sorry ${name}, but you need to wait until you 16.';

    if(age >= 16){
       console.log(aboveSixteen);
    }else{
        console.log(belowSixteen);
    }
 
}
checkAge ("Harmoni", 17);
checkAge ("Alaya", 16);
checkAge ("Grayson", 13);


//Exercise 3 Section
function checkQuadrant (x,y){
    if (x === 0 && y === 0){
       console,log("Origin");
    }else if (x === 0){
        console.log("Y axis")
    }else if(y === 0){
        console.log("x axis")
    }else if(x > 0 && y > 0) {
        console.log("Quad 1")
    }else if(x < 0 && y > 0) {
        console.log("Quad 2")
    }else if(x < 0 && y < 0) {
        console.log("Quad 3")
    }else {
        console.log("Quad 4")
    }
    
    checkQuadrant(0,2)
}