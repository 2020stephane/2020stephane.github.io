var img = new Image();
img.src = 'Park.jpg';
var CanvasXSize = 1500;
var CanvasYSize = 200;
var speed = 30; 
var scale = 2;
var y = -4.5; 


var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;
var style;


img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
     x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
     clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
     clearY = imgH;
    } else {
     clearY = CanvasYSize;
    }
    var monCanvas = document.getElementById('dessin');
    style = monCanvas.style;
    style.marginLeft = "auto";
    style.marginRight = "auto";
    var parentStyle = monCanvas.parentElement.style;
    parentStyle.textAlign = "center";
    parentStyle.width = "100%";
           if (monCanvas.getContext){
                ctx = monCanvas.getContext('2d');}
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); 
    if (imgW <= CanvasXSize) {
      if (x > CanvasXSize) {
        x = -imgW + x;
      }
      if (x > 0) {
        ctx.drawImage(img, -imgW + x, y, imgW, imgH);
      }
      if (x - imgW > 0) {
        ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
      }
    }
    else {
      if (x > (CanvasXSize)) {
        x = CanvasXSize - imgW;
      }
      if (x > (CanvasXSize-imgW)) {
        ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
      }
    }
    ctx.drawImage(img, x, y,imgW, imgH);
    x -= dx;
}
    