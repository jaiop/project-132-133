function back()
      {
        window.location = "index.html";
      }
  img = "";
    status = "";
    objects = [];
    
    function preload()
    {
        img = loadImage("bottles.jpeg");
    }
    
    function setup()
    {
        canvas = createCanvas(640,420);
        canvas.center();
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    }
    function modelLoaded()
    {
      console.log(" MODEL LOADED!");
      status = true;
      objectDetector.detect(img,gotResult);
      document.getElementById("status").innerHTML = "status : detecting objects";
    }
    function gotResult(error,results)
    {
      if(error)
      {
        console.error(error);
      }
      console.log(results);
    }
    function draw()              
{

  image(img, 0,0,640,420);

  if(status != "")
  {
    for(i = 0; i < objects.length; i++)
    {
      document.getElementById("status").innerHTML = "status : object detected";
      fill("#FF0000");
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke("#FF0000");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    } 
  }

}