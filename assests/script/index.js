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

    circle.setAttribute('style',`
    top: ${y - circle.clientWidth / 2}px;
    left: ${x - circle.clientHeight / 2}px; //cente the circle 
    `);
});
circle.addEventListener('click', () => {
    circle.classList.add('wave');

    setTimeout(() => {
        circle.classList.remove('wave');
    }, 500);
});




  