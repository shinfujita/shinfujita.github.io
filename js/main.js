'use strict';
// グローバルメニュー
const body = document.body;
const humberger = document.getElementById('humberger');
const closeNav = document.querySelector('.closeNav');

humberger.addEventListener('click', () => {
    body.classList.toggle('navOpen');
}, false);

console.log(closeNav[0]);

closeNav.addEventListener('click', () => {
    body.classList.remove('navOpen');
}, false);



// about
const myInfo = document.getElementById('myInfo');
const prevBtn = myInfo.getElementsByClassName('prevBtn')[0];
const nextBtn = myInfo.getElementsByClassName('nextBtn')[0];
const innerInfo = myInfo.getElementsByClassName('innerInfo');

const marker = document.getElementsByClassName('marker');

let current = 0;
let bros1 = 0;
let bros2 = 0;
let bros3 = 0;

marker[0].addEventListener('click', function() {
    current = 0;
    innerInfo[current].classList.toggle('selected', 'appear');
    bros2 = current + 1;
    bros3 = current + 2;
    innerInfo[bros2].classList.remove('selected', 'appear');
    innerInfo[bros3].classList.remove('selected', 'appear');
    marker[0].classList.toggle('selectedMarker');
    marker[1].classList.remove('selectedMarker');
    marker[2].classList.remove('selectedMarker');
});
marker[1].addEventListener('click', function() {
    current = 1;
    innerInfo[current].classList.toggle('selected', 'appear');
    bros1 = current - 1;
    bros3 = current + 1;
    innerInfo[bros1].classList.remove('selected', 'appear');
    innerInfo[bros3].classList.remove('selected', 'appear');
    marker[0].classList.remove('selectedMarker');
    marker[1].classList.toggle('selectedMarker');
    marker[2].classList.remove('selectedMarker');
});
marker[2].addEventListener('click', function() {
    current = 2;
    innerInfo[current].classList.toggle('selected', 'appear');
    bros1 = current - 2;
    bros2 = current - 1;
    innerInfo[bros1].classList.remove('selected', 'appear');
    innerInfo[bros2].classList.remove('selected', 'appear');
    marker[0].classList.remove('selectedMarker');
    marker[1].classList.remove('selectedMarker');
    marker[2].classList.toggle('selectedMarker');
});

prevBtn.addEventListener('click', function() {
    current--;
    let prevCurrent = 0;
    if (current < 0) {
        current = 2;
    }
    innerInfo[current].classList.toggle('selected', 'appear');
    if (current === 2) {
        prevCurrent = current - 2;
    } else {
        prevCurrent = current + 1;
    }
    innerInfo[prevCurrent].classList.remove('selected', 'appear');
    marker[current].classList.toggle('selectedMarker');
    marker[prevCurrent].classList.toggle('selectedMarker');
}, false);

nextBtn.addEventListener('click', function() {
    current++;
    let nextCurrent = 0;
    if (current > innerInfo.length - 1) {
        current = 0;
    }
    innerInfo[current].classList.toggle('selected', 'appear');
    if (current === 0) {
        nextCurrent = current + 2;
    } else {
        nextCurrent = current - 1;
    }
    innerInfo[nextCurrent].classList.remove('selected', 'appear');
    marker[current].classList.toggle('selectedMarker');
    marker[nextCurrent].classList.toggle('selectedMarker');
}, false);





// works
const workBTN1 = document.getElementById('workBTN1');
const modal1 = document.getElementsByClassName('modal1')[0];
const modalClose1 = document.querySelector('.modalClose1');

const workBTN2 = document.getElementById('workBTN2');
const modal2 = document.getElementsByClassName('modal2')[0];
const modalClose2 = document.querySelector('.modalClose2');

const workBTN3 = document.getElementById('workBTN3');
const modal3 = document.getElementsByClassName('modal3')[0];
const modalClose3 = document.querySelector('.modalClose3');

const workBTN4 = document.getElementById('workBTN4');
const modal4 = document.getElementsByClassName('modal4')[0];
const modalClose4 = document.querySelector('.modalClose4');

const workBTN5 = document.getElementById('workBTN5');
const modal5 = document.getElementsByClassName('modal5')[0];
const modalClose5 = document.querySelector('.modalClose5');


// btn1
workBTN1.addEventListener('click', () => {
    modal1.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);

modalClose1.addEventListener('click', () => {
    modal1.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);

// btn2
workBTN2.addEventListener('click', () => {
    modal2.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);

modalClose2.addEventListener('click', () => {
    modal2.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);

// btn3
workBTN3.addEventListener('click', () => {
    modal3.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);

modalClose3.addEventListener('click', () => {
    modal3.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);

// btn4
workBTN4.addEventListener('click', () => {
    modal4.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);

modalClose4.addEventListener('click', () => {
    modal4.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);

// btn5
workBTN5.addEventListener('click', () => {
    modal5.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);

modalClose5.addEventListener('click', () => {
    modal5.classList.toggle('modalOpen');
    body.classList.toggle('fixed');
}, false);
