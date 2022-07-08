const tiles = [];
const tilesImages = [];

let grid = [];

const DIM = 20;

const BLANK = 0;
const UP = 1;
const RIGHT = 2;
const DOWN = 3;
const LEFT = 4;


function preload() {
    tilesImages[0] = loadImage('img/blank.svg');
    tilesImages[1] = loadImage('img/up.svg');
}

function setup() {
    createCanvas(800, 800);

    // Load tiles
    tiles[0] = new Tile(tilesImages[0], [0, 0, 0, 0]);
    tiles[1] = new Tile(tilesImages[1], [1, 1, 0, 1]);
    tiles[2] = tiles[1].rotate(1);
    tiles[3] = tiles[1].rotate(2);
    tiles[4] = tiles[1].rotate(3);

    // Define edges
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        tile.analyze(tiles);
    }

    // Create grid
    for (let i = 0; i < DIM * DIM; i++) {
        grid[i] = new Cell(tiles.length);
    }


}

function draw() {
    background(0);

    const w = width / DIM;
    const h = height / DIM;

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let cell = grid[i + j * DIM];
            if (cell.collapsed) {
                let index = cell.options[0];
                image(tiles[index].img, i * w, j * h, w, h);
            }
            else {
                noFill();
                stroke(51);
                rect(i * w, j * h, w, h);
            }
        }
    }


    let gridCopy = [...grid];

    gridCopy = gridCopy.filter(a => !a.collapsed);

    // console.table(grid);
    // console.table(gridCopy);

    if (gridCopy.length === 0) {
        return;
    }

    gridCopy.sort((a, b) => a.options.length - b.options.length);

    let len = gridCopy[0].options.length;
    let stopIndex = 0;
    for (let i = 1; i < gridCopy.length; i++) {
        if (gridCopy[i].options.length > len) {
            stopIndex = i;
            break;
        }
    }

    if (stopIndex > 0) {
        gridCopy.splice(stopIndex);
    }

    const cell = random(gridCopy);
    cell.collapsed = true;
    const pick = random(cell.options);
    cell.options = [pick];


    // console.log(grid);
    // console.log(gridCopy);

    const nextGrid = [];

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let index = j + i * DIM;
            if (grid[index].collapsed) {
                nextGrid[index] = grid[index];
            } else {
                let options = new Array(tiles.length).fill(0).map((x, i) => i);

                // Looking up
                if (i > 0) {
                    let up = grid[j + (i - 1) * DIM];
                    let validOptions = [];
                    for (let options of up.options) {
                        let valid = tiles[options].down;
                        validOptions = validOptions.concat(valid);
                    }
                    checkValid(options, validOptions);
                }

                // Looking right
                if (j < DIM - 1) {
                    let right = grid[j + 1 + i * DIM];
                    let validOptions = [];
                    for (let options of right.options) {
                        let valid = tiles[options].left;
                        validOptions = validOptions.concat(valid);
                    }
                    checkValid(options, validOptions);
                }

                // Looking down
                if (i < DIM - 1) {
                    let down = grid[j + (i + 1) * DIM];
                    let validOptions = [];
                    for (let options of down.options) {
                        let valid = tiles[options].up;
                        validOptions = validOptions.concat(valid);
                    }
                    checkValid(options, validOptions);
                }

                // Looking left
                if (j > 0) {
                    let left = grid[j - 1 + i * DIM];
                    let validOptions = [];
                    for (let options of left.options) {
                        let valid = tiles[options].right;
                        validOptions = validOptions.concat(valid);
                    }
                    checkValid(options, validOptions);
                }

                nextGrid[index] = new Cell(options)
            }
        }
    }

    grid = nextGrid;

}

function checkValid(arr, valid) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let element = arr[i];
        if (!valid.includes(element)) {
            arr.splice(i, 1);
        }
    }
}

function mousePressed() {
    redraw();
}