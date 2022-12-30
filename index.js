let pScore = document.getElementById("p-score");
let aScore = document.getElementById("a-score");
let period = document.getElementById("period");
let fouls = document.getElementById("fouls");
let padd = 0;
let aadd = 0;
let peadd = 0;
let fadd = 0;
let zero = 0;

function pOne() {
    padd += 1;
    pScore.textContent = padd;
}

function pTwo() {
    padd += 2;
    pScore.textContent = padd;
}

function pThree() {
    padd += 3;
    pScore.textContent = padd;
}

function aOne() {
    aadd += 1;
    aScore.textContent = aadd;
}

function aTwo() {
    aadd += 2;
    aScore.textContent = aadd;
}

function aThree() {
    aadd += 3;
    aScore.textContent = aadd;
}

function peOne() {
    peadd += 1;
    period.textContent = peadd;
}

function fOne() {
    fadd += 1;
    fouls.textContent = fadd;
}

function fTwo() {
    fadd += 2;
    fouls.textContent = fadd;
}

function fThree() {
    fadd += 3;
    fouls.textContent = fadd;
}

function newGame() {
    zero = 0;
    padd = 0;
    aadd = 0;
    peadd = 0;
    fadd = 0;
    aScore.textContent = zero;
    pScore.textContent = zero;
    period.textContent = zero;
    fouls.textContent = zero;
}