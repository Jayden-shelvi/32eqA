song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound("1.mp3");
    song2 = loadSound("2.mp3");
}

function play()
{
  song1.play();
  song1.setVolume(1);
  song1.rate(1);
  
  song2.play();
  song2.setVolume(1);
  song2.rate(1);
}

function setup()
{
    canvas = createCanvas(600, 500);
    
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('Pose Net is getting I nitialized');
}

function draw()
{
    image(video, 0, 0, 600, 500);
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y; 
    console.log("leftWristX  = " + leftWristX + "leftWristY  = " + leftWristY );

    righttWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX  = " + rightWristX + "rightWristY  = " + rightWristY );
  }
}