function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);

    fill(600, 0, 0);
    stroke(600,0, 0);
    circle(-20, 0, 200);

    fill(600, -60, 0);
    stroke(600,-60, 0);
    circle(650, 0, 200);

    fill(600, -60, 0);
    stroke(600,-60, 0);
    circle(650, 500, 200);

    fill(600, 0, 0);
    stroke(600,0, 0);
    circle(-20, 500, 200);
}

function take_snapshot(){
    save('coolframe.png');
}
