const kontostand = 150;
let kontostand1 = kontostand;
const prize= 35;

function run() {
    document.querySelector("#kontostand").innerHTML = kontostand1+"€";
    let random1 = Math.round(Math.random()*5+1);
    let random2 = Math.round(Math.random()*5+1);
    let random3 = Math.round(Math.random()*5+1);

    console.log(random1, random2, random3)
    switch (random1) {
        case 1: document.querySelector(".first").classList = "fa-solid first fa-dice-one fa-5x"; break;
        case 2: document.querySelector(".first").classList = "fa-solid first fa-dice-two fa-5x"; break;
        case 3: document.querySelector(".first").classList = "fa-solid first fa-dice-three fa-5x"; break;
        case 4: document.querySelector(".first").classList = "fa-solid first fa-dice-four fa-5x"; break;
        case 5: document.querySelector(".first").classList = "fa-solid first fa-dice-five fa-5x"; break;
        case 6: document.querySelector(".first").classList = "fa-solid first fa-dice-six fa-5x"; break;
    }

    switch (random2) {
        case 1: document.querySelector(".second").classList = "fa-solid second fa-dice-one fa-5x"; break;
        case 2: document.querySelector(".second").classList = "fa-solid second fa-dice-two fa-5x"; break;
        case 3: document.querySelector(".second").classList = "fa-solid second fa-dice-three fa-5x"; break;
        case 4: document.querySelector(".second").classList = "fa-solid second fa-dice-four fa-5x"; break;
        case 5: document.querySelector(".second").classList = "fa-solid second fa-dice-five fa-5x"; break;
        case 6: document.querySelector(".second").classList = "fa-solid second fa-dice-six fa-5x"; break;
    }

    switch (random3) {
        case 1: document.querySelector(".third").classList = "fa-solid third fa-dice-one fa-5x"; break;
        case 2: document.querySelector(".third").classList = "fa-solid third fa-dice-two fa-5x"; break;
        case 3: document.querySelector(".third").classList = "fa-solid third fa-dice-three fa-5x"; break;
        case 4: document.querySelector(".third").classList = "fa-solid third fa-dice-four fa-5x"; break;
        case 5: document.querySelector(".third").classList = "fa-solid third fa-dice-five fa-5x"; break;
        case 6: document.querySelector(".third").classList = "fa-solid third fa-dice-six fa-5x"; break;
    }
   
    if ((random1 == random2)&&(random1 == random3)) {
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