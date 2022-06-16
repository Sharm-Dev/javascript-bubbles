const canvas = document.getElementById('canvas');
const drawingContext = canvas.getContext('2d');
const innerBrowserWidth = window.innerWidth;
const innerBrowserHeight = window.innerHeight;

canvas.innerBrowserWidth;
canvas.innerBrowserHeight;

let mouseX = 0;
let mouseY = 0;

addEventListener("mousemove", () => {
    console.log(event, "-----> The mousemove event coordinate");
    mouseX = event.clientX;
    mouseY = event.clientX;
    console.log(mouseX, "-----> mouseX coordinate");
    console.log(mouseY, "-----> mouseY coordinate");
   
})