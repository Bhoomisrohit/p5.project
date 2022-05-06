function setup()
{
     canvas=createCanvas(600,500);
     canvas.center();

     video=createCapture(VIDEO);
     video.hide();
     video.size();
}

function draw()
{
    image(video,150,150,300,200);
    fill("blue");
    stroke("blue");
    rect(30,0,20,600)
   
    fill("blue");
    stroke("blue");
    rect(30,0,600,20)
   
    fill("blue");
    stroke("blue");
    rect(30,600,20,600)
   
    fill("blue");
    stroke("blue");
    rect(30,0,20,600)
   


    fill("pink");
    stroke("pink");
    circle(30,30,30);

    fill("pink");
    stroke("pink");
     circle(570,470,30);
   
    circle(570,30,30);
    fill("pink");
    stroke("pink");
    
    circle(30,470,30);
    fill("pink");
    stroke("pink");

  

    
}