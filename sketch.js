var fixedRect,movingRect,f1,f2;
function setup()
{
    createCanvas(800,600)
    fixedRect=createSprite(200,200,50,80);
    movingRect=createSprite(400,200,80,30);
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    fixedRect.debug=true;
    movingRect.debug=true;

}
function draw()
  {
    background("black");
    movingRect.x=World.mouseX;
    movingRect.y=World.mouseY;
    console.log(movingRect.x-fixedRect.x);
    console.log(movingRect.width/2+fixedRect.width/2);
   
    if(isTouching())
    {
      movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue"; 
    }
    else
    {
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green"
    }
    isTouching();

    drawSprites();
  }

function isTouching()
{

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2
    &&fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2)
    {
    return true;
   }
   else
   {
    return false;
   }

}

