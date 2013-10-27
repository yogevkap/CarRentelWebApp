var imageWait = new Image();
imageWait.src = "images/hourglass.jpg";
var image0 = new Image();
image0.src = "images/toyota.jpg";
var image1 = new Image();
image1.src = "images/ford.jpg";
var image2 = new Image();
image2.src = "images/mazda.jpg";
var image3 = new Image();
image3.src = "images/kia.jpg";
var image4 = new Image();
image4.src = "images/honda.jpg";

images = new Array(image0, image1, image2, image3, image4);

var counter = 0;
var ctx;
var interval;

function draw() {
    myCanvas = document.getElementById('myCanvas');
    ctx = myCanvas.getContext('2d');
    ctx.drawImage(imageWait, 0, 0, 600, 400);
    interval = setInterval(draw_next_image, 3000);
}

function draw_next_image() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.drawImage(images[counter], 0, 0, 600, 400);
    counter++;
    if (counter == images.length) { counter = 0; }
}
window.onload = draw;