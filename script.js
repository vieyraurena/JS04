const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Circle
let xPositionCircle = 250;
let yPositionCircle = 230;
let radiusBall = 100;


const draw = () => {  
  let colorRandom = () => {
    return Math.random() * 256; 
  }

  let color = `rgb(${colorRandom()}, ${colorRandom()}, ${colorRandom()})`;
  console.log(color)

  context.fillStyle = 'white';
  context.font = '50px serif';
  context.fillText('eternal smile', 500, 200);

  context.beginPath();
  context.arc(xPositionCircle, yPositionCircle, radiusBall, -3.18, 2 * Math.PI,true);
  context.fillStyle = color;


  context.moveTo(xPositionCircle, yPositionCircle);
  context.arc(180, 150, 40, 0, 2 * Math.PI);

  context.moveTo(xPositionCircle, yPositionCircle);
  context.arc(300, 150, 40, 0, 2 * Math.PI);
  context.fill();
  context.closePath()


  if (xPositionCircle > canvas.width) {
    xPositionCircle = 0
  }

  xPositionCircle += 10;


  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);