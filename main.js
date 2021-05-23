var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player1.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keyPressed == '66')
    {
        new_image('black_panther.jpeg');
        console.log("b = black_panther");
    }
    if(keyPressed == '72')
    {
        new_image('hulk.png');
        console.log("h = hulk");
    }
    if(keyPressed == '73')
    {
        new_image('iron_man.jpeg');
        console.log("i = ironman");
    }
    if(keyPressed == '83')
    {
        new_image('spiderman.jpeg');
        console.log("s = spiderman");
    }
    if(keyPressed == '84')
    {
        new_image('thor.jpeg');
        console.log("t = thor");
    }
}

function up() {
    if(player_y>=0)
    {
        player_y = player_y - block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When up arrow key is pressed, x = " + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if(player_y<=550)
    {
        player_y = player_y + block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When up arrow key is pressed, x = " + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if(player_x>=0)
    {
        player_x = player_x - block_image_width;
        console.log("Block Image Height = " + block_image_height);
        console.log("When up arrow key is pressed, x = " + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if(player_x<=850)
    {
        player_x = player_x + block_image_width;
        console.log("Block Image Height = " + block_image_height);
        console.log("When up arrow key is pressed, x = " + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

