const tiles = [];

function preload() {
    tiles[0] = loadImage('img/blank.svg');
    tiles[1] = loadImage('img/up.svg');
    tiles[2] = loadImage('img/right.svg');
    tiles[3] = loadImage('img/down.svg');
    tiles[4] = loadImage('img/left.svg');
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    image(tiles[0], 0, 0);
    image(tiles[1], 50, 0);
    image(tiles[2], 100, 0);
    image(tiles[3], 150, 0);
    image(tiles[4], 200, 0);
}