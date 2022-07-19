const kontostand = 150;
let kontostand1 = kontostand;

function run() {
    document.querySelector("#kontostand").innerHTML = kontostand1+"€";
    let random = Math.round(Math.random()*5+1);
    console.log(random);
    //document.querySelector("#randomNumber").innerHTML = random;

    switch (random) {
        case 1: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-one fa-5x"; break;
        case 2: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-two fa-5x"; break;
        case 3: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-three fa-5x"; break;
        case 4: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-four fa-5x"; break;
        case 5: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-five fa-5x"; break;
        case 6: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-six fa-5x"; break;
    }

    if (random == 6) {
        kontostand1+=5;
    } else {
        kontostand1-=1;
    }
}

function revert() {
    document.querySelector("#kontostand").innerHTML = kontostand+"€";
}