// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(50, 10, 55, 1.0)'; 
  ctx.fillRect(10, 10, 225, 225);       

ctx.fillStyle = 'rgba(0, 225, 0, 1.0)';
  ctx.fillRect(250, 250, 150, 150);  
     
ctx.fillStyle = 'rgba(225, 0, 0, 1.0)'; 
  ctx.fillRect(410, 410, 10, 10); 

ctx.fillStyle = 'rgba(0, 0, 225, 1.0)'; 
  ctx.fillRect(420, 410, 10, 10); 

ctx.fillStyle = 'rgba(100, 100, 0, 1.0)'; 
  ctx.fillRect(430, 410, 10, 10); 

ctx.fillStyle = 'rgba(0, 100, 100, 1.0)'; 
  ctx.fillRect(440, 410, 10, 10); 

ctx.fillStyle = 'rgba(100, 0, 100, 1.0)'; 
  ctx.fillRect(410, 420, 10, 10); 

ctx.fillStyle = 'rgba(150, 25, 0, 1.0)'; 
  ctx.fillRect(420, 420, 10, 10); 

ctx.fillStyle = 'rgba(145, 0, 35, 1.0)'; 
  ctx.fillRect(430, 420, 10, 10); 

ctx.fillStyle = 'rgba(0, 35, 50, 1.0)'; 
  ctx.fillRect(440, 420, 10, 10); 

ctx.fillStyle = 'rgba(0, 50, 25, 1.0)'; 
  ctx.fillRect(410, 430, 10, 10); 

ctx.fillStyle = 'rgba(100, 25, 10, 1.0)'; 
  ctx.fillRect(420, 430, 10, 10); 

ctx.fillStyle = 'rgba(40, 0, 60, 1.0)'; 
  ctx.fillRect(430, 430, 10, 10); 

ctx.fillStyle = 'rgba(0, 80, 70, 1.0)'; 
  ctx.fillRect(440, 430, 10, 10); 

ctx.fillStyle = 'rgba(0, 30, 100, 1.0)'; 
  ctx.fillRect(410, 440, 10, 10); 

ctx.fillStyle = 'rgba(70, 0, 20, 1.0)'; 
  ctx.fillRect(420, 440, 10, 10); 

ctx.fillStyle = 'rgba(100, 0, 60, 1.0)'; 
  ctx.fillRect(430, 440, 10, 10); 

ctx.fillStyle = 'rgba(70, 25, 0, 1.0)'; 
  ctx.fillRect(440, 440, 10, 10); 
}
