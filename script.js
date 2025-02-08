const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let randomize = document.getElementById("randomize");
let reset = document.getElementById("reset");

let firstHexCode = document.getElementById("first-hex-code");
let firstColorBox = document.getElementById("first-color-box")

let secondHexCode = document.getElementById("second-hex-code");
let secondColorBox = document.getElementById("second-color-box")

let thirdHexCode = document.getElementById("third-hex-code");
let thirdColorBox = document.getElementById("third-color-box")

let fourthHexCode = document.getElementById("fourth-hex-code");
let fourthColorBox = document.getElementById("fourth-color-box")

let fifthHexCode = document.getElementById("fifth-hex-code");
let fifthColorBox = document.getElementById("fifth-color-box")

let sixthHexCode = document.getElementById("sixth-hex-code");
let sixthColorBox = document.getElementById("sixth-color-box")

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length)
    return randomNumber
}

reset.addEventListener("click", function(){
    firstColorBox.style.backgroundColor = "#222222"
    firstHexCode.textContent = "#222222"
    secondColorBox.style.backgroundColor = "#444444"
    secondHexCode.textContent = "#444444"
    thirdColorBox.style.backgroundColor = "#666666"
    thirdHexCode.textContent = "#666666"
    fourthColorBox.style.backgroundColor = "#888888"
    fourthHexCode.textContent = "#888888"
    fifthColorBox.style.backgroundColor = "#AAAAAA"
    fifthHexCode.textContent = "#AAAAAA"
    sixthColorBox.style.backgroundColor = "#CCCCCC"
    sixthHexCode.textContent = "#CCCCCC"
});
randomize.addEventListener("click", function(){
    let hexCodeForFirstBox = "#"
    for(let a = 0; a < 6; a++){
        hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox
});

randomize.addEventListener("click", function(){
    let hexCodeForSecondBox = "#"
    for(let b = 0; b < 6; b++){
        hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    secondColorBox.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.textContent = hexCodeForSecondBox
});

randomize.addEventListener("click", function(){
    let hexCodeForThirdBox = "#"
    for(let c = 0; c < 6; c++){
        hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    thirdColorBox.style.backgroundColor = hexCodeForThirdBox
    thirdHexCode.textContent = hexCodeForThirdBox
});

randomize.addEventListener("click", function(){
    let hexCodeForFourthBox = "#"
    for(let d = 0; d < 6; d++){
        hexCodeForFourthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    fourthColorBox.style.backgroundColor = hexCodeForFourthBox
    fourthHexCode.textContent = hexCodeForFourthBox
});

randomize.addEventListener("click", function(){
    let hexCodeForFifthBox = "#"
    for(let e = 0; e < 6; e++){
        hexCodeForFifthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    fifthColorBox.style.backgroundColor = hexCodeForFifthBox
    fifthHexCode.textContent = hexCodeForFifthBox
});

randomize.addEventListener("click", function(){
    let hexCodeForSixthBox = "#"
    for(let f = 0; f < 6; f++){
        hexCodeForSixthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    sixthColorBox.style.backgroundColor = hexCodeForSixthBox
    sixthHexCode.textContent = hexCodeForSixthBox
});


