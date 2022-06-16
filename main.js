canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.

var rover_width= 100;
var rover_height= 100;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 function add() {
	background_imagetag=new Image();                                      //defining a variable with a new image
	background_imagetag.onload=uploadBackground;                                     // setting a function, onloading this variable
	background_imagetag.src=background_image;                                     // load image
    
    rover_imagetag=new Image();                                     //defining a variable with a new image
	rover_imagetag.onload=uploadRover;                                     // setting a function, onloading this variable
	rover_imagetag.src=rover_image;                                     // load image
 }
//Create "uploadBackground()" function.
    
function uploadBackground() {
    ctx.drawImage(background_imagetag, 0, 0, canvas.width, canvas.height);
}
                                         //Draw image of background

//Create "uploadrover()" function.

function uploadRover() {
    ctx.drawImage(rover_imagetag, rover_x, rover_y, rover_width, rover_height);
}
                                        //Draw image of rover


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		
    if (keyPressed=="38") {
        up();
        console.log("up");
    }


     //Write code if keypressed is down. ASCII value of "down" arrow is 40.
		
    if (keyPressed=="40") {
        down();
        console.log("down");
    }

    if (keyPressed=="37") {
        left();
        console.log("left");
    }

    if (keyPressed=="39") {
        right();
        console.log("right");
    }
    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



