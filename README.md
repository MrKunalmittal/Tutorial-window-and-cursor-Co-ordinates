## Tutorial  📚

### Windows and Cursors Coordinates


In this tutorial, we will learn about how to get the window's height, width and the cursors coordinates with respect to screen using basic JavaScript. We will find the ```cursors coordinates vertically(Y-axsis) and Horizontally (X-axis) relative to the screen```.

JavaScript allows us to use different properties to get the Coordinates of cursor and screen using:<br />
    - the event.clientX Property <br />
    - the event.clientY Property <br />
    - the windows.innerWidth Property <br />
    - the windows.innerHeight Property <br />

``` windows.innerWidth & windows.innerHeight Property: returns the user screens width and height in pixels```.
## Syntax
### Windows Height and Width:
We create a function with name readWindow and then use that window proprty to get the height and width of users window screen.
```javascript

const pageW=document.querySelector('.page-w');
const pageH=document.querySelector('.page-h');

const cursorX=document.querySelector('.cursor-x');
const cursorY=document.querySelector('.cursor-y');

function readWindow() {
    pageW.innerText = `window Width: ${window.innerWidth}px`;
    pageH.innerText = `window Height: ${window.innerHeight}px`;
}
```

### Cursors Coordinates
We add document eventListener on mouse and use the event.client property.
```javascript
document.addEventListener('mousemove', (event) => {
    let x=event.clientX;
    let y=event.clientY;

    cursorX.innerText=`Cursor X : ${x}`;
    cursorY.innerText=`Cursor Y : ${y}`;
});
```
### References
[- w3schools](https://www.w3schools.com/jsref/prop_win_innerheight.asp)<br />
[- Tutorialspoint- window Screen](https://www.tutorialspoint.com/javascript-javascript-bom-window-screen)<br />
[- Tutorialspoint - cursor Co-ordinates](https://www.tutorialspoint.com/How-to-find-the-coordinates-of-the-cursor-relative-to-the-screen-with-JavaScript)

### Demo
Click [here](https://mrkunalmittal.github.io/Tutorial-window-and-cursor-Co-ordinates/) to check demo result.

<br />

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)