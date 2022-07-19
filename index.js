const kontostand = 150;
let kontostand1 = kontostand;
const prize = 7000;

function generateDice (random, className) {

audio.play(); 

    switch (random) {
        case 1: document.querySelector("."+className).classList = "fa-solid fa-dice-one fa-4x fa-beat" + " "+ className; break;
        case 2: document.querySelector("."+className).classList = "fa-solid fa-dice-two fa-4x fa-beat" + " "+ className; break;
        case 3: document.querySelector("."+className).classList = "fa-solid fa-dice-three fa-4x fa-beat"+ " " + className; break;
        case 4: document.querySelector("."+className).classList = "fa-solid fa-dice-four fa-4x fa-beat" + " "+ className; break;
        case 5: document.querySelector("."+className).classList = "fa-solid fa-dice-five fa-4x fa-beat" + " "+ className; break;
        case 6: document.querySelector("."+className).classList = "fa-solid fa-dice-six fa-4x fa-beat"+ " " + className; break;
    }
    return random;
}

function run() {
    document.querySelector("#kontostand").innerHTML = kontostand1+"€";

    let random1 = generateDice(Math.round(Math.random()*5+1), "first");
    let random2 = generateDice(Math.round(Math.random()*5+1), "second");
    let random3 = generateDice(Math.round(Math.random()*5+1), "third");
    let random4 = generateDice(Math.round(Math.random()*5+1), "fourth");
    let random5 = generateDice(Math.round(Math.random()*5+1), "fifth");
    let random6 = generateDice(Math.round(Math.random()*5+1), "sixth");

    console.log(random1, random2, random3, random4, random5, random6);
    
    if ((random1 == random2)&&(random1 == random3)&&(random1 == random4)&&(random1 == random5)&&(random1 == random6)) {
        kontostand1+=prize;
        document.querySelector("#prize").innerHTML ="Du bist ein Glückspilz! +" + prize+"€";
    } else {
        kontostand1-=1;
        document.querySelector("#prize").innerHTML ="";
    }
}

function revert() {
    document.querySelector("#kontostand").innerHTML = kontostand+"€";
    document.querySelector("#prize").innerHTML ="";
}



const audio = new Audio("audio/button-20.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });

