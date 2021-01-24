var balloon

function setup() {
  createCanvas(1455,800);
  database = firebase.database()
  balloon = createSprite(250,490,10,10);
  balloon.addImage(BLimage)
 
  var posRef = database.ref('Balloon/position')
  posRef.on('value', read)
}

function preload () {
  this.Bimage = loadImage("pro-C35 images/Hot Air Ballon-01.png");
  this.BLimage = loadImage("pro-C35 images/Hot Air Ballon-02.png");
  
}

function draw() {
  background(Bimage); 

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10
}
else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y+10
}

  drawSprites();
}
function changePosition(x,y){
  database.ref ('Ball/position').set ({
      x:position.x+x,
      y:position.y+y
  })

  }


function read(data){
position = data.val()
balloon.x = position.x
balloon.y = position.y
}
