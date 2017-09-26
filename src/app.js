let PIXI = require('pixi.js');
let Stats = require('stats.js');
let Kaleidoscope = require('./kaleidoscope');

var kal = new Kaleidoscope();

var type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}
PIXI.utils.sayHello(type)

var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

var canvas = document.getElementById('kaleidoscope');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

//Create the renderer
var renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, {view: canvas});

// Create the stage
var stage = new PIXI.Container();

var sliceContainer = new PIXI.Container();

// //Add the canvas to the HTML document
// document.body.appendChild(renderer.view);

// //Create a container object called the `stage`
// var stage = new PIXI.Container();

// var kaleidoscope = null;

// //Use Pixi's built-in `loader` object to load an image
// PIXI.loader
//   .add("assets/bg--main-bertrand.jpg")
//   .load(setup);

// //This `setup` function will run when the image has loaded
// function setup() {
    
//   //Create the `cat` sprite from the texture
//   kaleidoscope = new PIXI.Sprite(
//       PIXI.loader.resources["assets/bg--main-bertrand.jpg"].texture
//   );

//   var texture = PIXI.Texture.fromImage("assets/bg--main-bertrand.jpg");
//   var tilingTexture = new PIXI.extras.TilingSprite(texture, 100,100);
//   stage.addChild(tilingTexture);

//   var semicircle = new PIXI.Graphics();
//   semicircle.beginFill();
// //   semicircle.lineStyle(2, 0xffffff);
//   semicircle.arc(0, 0, 100, 0, Math.PI); // cx, cy, radius, startAngle, endAngle
//   semicircle.position = {x: window.innerWidth/2, y: window.innerHeight/2};
//   semicircle.endFill();
//   stage.addChild(semicircle);

//   tilingTexture.mask = semicircle;

//   //Add the cat to the stage
// //   stage.addChild(kaleidoscope);

//   //Render the stage   
//   renderer.render(stage);

//   draw();
// }

// function draw(){
//     requestAnimationFrame(draw)

//     // kaleidoscope.x += 1;

//     renderer.render(stage);

// }


// var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
// var renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, {view: canvas});

//create a texture
kal.texture = PIXI.Texture.fromImage("./assets/bg--main-bertrand.jpg");
// var texture = PIXI.Texture.fromImage("./assets/bg--main-bertrand.jpg");
var tilingSprite = new PIXI.extras.TilingSprite(kal.texture, 2000, 2000);
stage.addChild(tilingSprite);

//create a polygon
var graphics = new PIXI.Graphics();
graphics.beginFill(0);
graphics.moveTo(50,50);
graphics.lineTo(300,140);
graphics.lineTo(220, 320);
graphics.lineTo(80, 110);
graphics.lineTo(50,50);
graphics.endFill();
// stage.addChild(graphics);

  var semicircle = new PIXI.Graphics();
  semicircle.beginFill(0);
//   semicircle.lineStyle(2, 0xffffff);
  semicircle.arc(0, 0, 500, 0, 2*Math.PI); // cx, cy, radius, startAngle, endAngle
  semicircle.position = {x: window.innerWidth/2, y: window.innerHeight/2};
  semicircle.endFill();
  stage.addChild(semicircle);

//mask the texture with the polygon
tilingSprite.mask = semicircle;

let ticker = new PIXI.ticker.Ticker();
ticker.add(update);
ticker.start();


// update();
function update(delta)
{    
    // requestAnimationFrame( update );
    // semicircle.x += 1;
    stats.begin();
    renderer.render(stage);
    stats.end();
}