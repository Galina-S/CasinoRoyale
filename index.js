let kontostand = 100;

function run() {
    document.querySelector("#kontostand").innerHTML = kontostand+"€";
    let random = Math.round(Math.random()*5+1);
    document.querySelector("#randomNumber").innerHTML = random;
    if (random == 6) {
        kontostand+=5;
    } else {
        kontostand-=1;
    }
}

function revert() {
    document.querySelector("#kontostand").innerHTML = 100+"€";
}