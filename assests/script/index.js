'use strict';

/*
    java script

   detecting window sixe and cursor coordinates

*/

const pageW=document.querySelector('.page-w');
const pageH=document.querySelector('.page-h');

const cursorX=document.querySelector('.cursor-x');
const cursorY=document.querySelector('.cursor-y');

function readWindow() {
    pageW.innerText =  `window width: ${window.innerWidth}px`;
    pageH.innerText =  `window height: ${window.innerHeight}px`;
}

window.addEventListener('resize', () => {
    readWindow();
});

window.addEventListener('load', () => {
    readWindow();
});
document.addEventListener('mousemove', (event) => {
    let x=event.clientX;
    let y=event.clientY;

    cursorX.innerText=`Cursor x : ${x}`;
    cursorY.innerText=`Cursor y : ${y}`;
});





  