## Tutorial  📚

### Windows and Cursors Co-ordinates


In this tutorial, we will learn about how to get the window's height, width and the cursors co-ordinates with respect to screen using basic JavaScript. We will find the ```cursors co-ordinates vertically(Y-axsis) and Horizontally (X-axis) relative to the screen```.

JavaScript allows us to use different properties to get the Co-ordinates of cursor and screen using:
    - the event.clientX Property
    - the event.clientY Property
    - the windows.innerWidth Property
    - the windows.innerHeight Property

``` windows.innerWidth & windows.innerHeight Property: returns the user screens width and height in pixels```.
## Syntax
### Windows Height and Width:
We create a function with name readWindow and then use that window proprty to get the height and width of users window screen.
```javascript
function readWindow() {
    pageW.innerText = `window width: ${window.innerWidth}px`;
    pageH.innerText = `window height: ${window.innerHeight}px`;
}
```

### Cursors Coordinates
We add document eventListener on mouse and use the event.client property.
```javascript
    document.addEventListener('mousemove', (event) => {
    let x=event.clientX;
    let y=event.clientY;

    cursorX.innerText=`Cursor x : ${x}`;
    cursorY.innerText=`Cursor y : ${y}`;
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