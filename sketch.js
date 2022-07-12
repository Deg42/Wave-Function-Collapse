let tiles = [];
const tilesImages = [];

let grid = [];

// Grid dimensions
const DIM = 20;


function preload() {
    // Load images
    const setTiles = 'tiny-dungeon'; // Set of tiles ("circuit" or "pipe")
    const tilesCount = 57; // Including 0

    for (let i = 0; i < tilesCount; i++) {
        tilesImages[i] = loadImage(`img/${setTiles}/${i}.png`);
    }
}

function removeDuplicatedTiles(tiles) {
    const uniqueTilesMap = {};
    for (const tile of tiles) {
        const key = tile.edges.join(','); // ex: "ABB,BCB,BBA,AAA"
        uniqueTilesMap[key] = tile;
    }
    return Object.values(uniqueTilesMap);
}


function setup() {
    // Create canvas
    createCanvas(400, 400);
    //randomSeed(1);

    // Load tiles

    // Pipe tiles
    // tiles[0] = new Tile(tilesImages[0], ['A', 'A', 'A', 'A']);
    // tiles[1] = new Tile(tilesImages[1], ['B', 'B', 'A', 'B']);

    // Circuit tiles
    // tiles[0] = new Tile(tilesImages[0], ['AAA', 'AAA', 'AAA', 'AAA']);
    // tiles[1] = new Tile(tilesImages[1], ['BBB', 'BBB', 'BBB', 'BBB']);
    // tiles[2] = new Tile(tilesImages[2], ['BBB', 'BCB', 'BBB', 'BBB']);
    // tiles[3] = new Tile(tilesImages[3], ['BBB', 'BDB', 'BBB', 'BDB']);
    // tiles[4] = new Tile(tilesImages[4], ['ABB', 'BCB', 'BBA', 'AAA']);
    // tiles[5] = new Tile(tilesImages[5], ['ABB', 'BBB', 'BBB', 'BBA']);
    // tiles[6] = new Tile(tilesImages[6], ['BBB', 'BCB', 'BBB', 'BCB']);
    // tiles[7] = new Tile(tilesImages[7], ['BDB', 'BCB', 'BDB', 'BCB']);
    // tiles[8] = new Tile(tilesImages[8], ['BDB', 'BBB', 'BCB', 'BBB']);
    // tiles[9] = new Tile(tilesImages[9], ['BCB', 'BCB', 'BBB', 'BCB']);
    // tiles[10] = new Tile(tilesImages[10], ['BCB', 'BCB', 'BCB', 'BCB']);
    // tiles[11] = new Tile(tilesImages[11], ['BCB', 'BCB', 'BBB', 'BBB']);
    // tiles[12] = new Tile(tilesImages[12], ['BBB', 'BCB', 'BBB', 'BCB']);

    // Tiny dungeon tiles
    tiles[0] = new Tile(tilesImages[0], ['CCC', 'CCC', 'CCC', 'CCC']);
    tiles[1] = new Tile(tilesImages[1], ['CCC', 'CCB', 'BCC', 'CCC']);
    tiles[2] = new Tile(tilesImages[2], ['CCC', 'CCB', 'BBB', 'BCC']);
    tiles[3] = new Tile(tilesImages[3], ['CCC', 'CCC', 'CCB', 'BCC']);
    tiles[4] = new Tile(tilesImages[4], ['SSS', 'BCC', 'CCB', 'BBB']);
    tiles[5] = new Tile(tilesImages[5], ['SSS', 'BBB', 'BCC', 'CCB']);
    tiles[6] = new Tile(tilesImages[6], ['CCC', 'CCB', 'ITOP', 'BCC']);
    tiles[7] = new Tile(tilesImages[7], ['WWW', 'WWW', 'F1', 'WWW']);
    tiles[8] = new Tile(tilesImages[8], ['WWW', 'WWW', 'F2', 'WWW']);
    tiles[9] = new Tile(tilesImages[9], ['WWW', 'WWW', 'SSS', 'WWW']);
    tiles[10] = new Tile(tilesImages[10], ['WWW', 'DDD', 'SSS', 'WWW']);
    tiles[11] = new Tile(tilesImages[11], ['WWW', 'WWW', 'SSS', 'DDD']);

    tiles[12] = new Tile(tilesImages[12], ['CCC', 'CCC', 'CCC', 'CCC']);
    tiles[13] = new Tile(tilesImages[13], ['CCB', 'BBB', 'BCC', 'CCC']);
    tiles[14] = new Tile(tilesImages[14], ['BBB', 'WWW', 'SSS', 'WWW']);
    tiles[15] = new Tile(tilesImages[15], ['BCC', 'CCC', 'CCB', 'BBB']);
    tiles[16] = new Tile(tilesImages[16], ['BCC', 'CCB', 'WWW', 'CCC']);
    tiles[17] = new Tile(tilesImages[17], ['CCB', 'BBB', 'WWW', 'BCC']);
    tiles[18] = new Tile(tilesImages[18], ['ITOP', 'WWW', 'IBOT', 'WWW']);
    tiles[19] = new Tile(tilesImages[19], ['WWW', 'WWW', 'F1', 'WWW']);
    tiles[20] = new Tile(tilesImages[20], ['WWW', 'WWW', 'F2', 'WWW']);
    tiles[21] = new Tile(tilesImages[21], ['WWW', 'WWW', 'SSS', 'WWW']);
    tiles[22] = new Tile(tilesImages[22], ['WWW', 'DDD', 'SSS', 'WWW']);
    tiles[23] = new Tile(tilesImages[23], ['WWW', 'WWW', 'SSS', 'DDD']);

    tiles[24] = new Tile(tilesImages[24], ['CCC', 'CCC', 'CCC', 'CCC']);
    tiles[25] = new Tile(tilesImages[25], ['CCB', 'BCC', 'CCC', 'CCC']);
    tiles[26] = new Tile(tilesImages[26], ['SSS', 'BCC', 'CCC', 'CCB']);
    tiles[27] = new Tile(tilesImages[27], ['BCC', 'CCC', 'CCC', 'CCB']);
    tiles[28] = new Tile(tilesImages[28], ['BBB', 'WWW', 'SSS', 'WWW']);
    tiles[29] = new Tile(tilesImages[29], ['BBB', 'WWW', 'SSS', 'WWW']);
    tiles[30] = new Tile(tilesImages[30], ['IBOT', 'SSS', 'SSS', 'SSS']);
    tiles[31] = new Tile(tilesImages[31], ['F1', 'SSS', 'SSS', 'SSS']);
    tiles[32] = new Tile(tilesImages[32], ['F2', 'SSS', 'SSS', 'SSS']);
    tiles[33] = new Tile(tilesImages[33], ['WWW', 'WWW', 'SSS', 'WWW']);
    tiles[35] = new Tile(tilesImages[35], ['WWW', 'WWW', 'SSS', 'DDD']);
    tiles[34] = new Tile(tilesImages[34], ['WWW', 'DDD', 'SSS', 'WWW']);

    tiles[36] = new Tile(tilesImages[36], ['BSS', 'TTT', 'SSB', 'BBB']);
    tiles[37] = new Tile(tilesImages[37], ['SSS', 'TTT', 'SSS', 'TTT']);
    tiles[38] = new Tile(tilesImages[38], ['SSB', 'BBB', 'BSS', 'TTT']);
    tiles[39] = new Tile(tilesImages[39], ['SSS', 'BBB', 'SSS', 'BBB']);
    tiles[40] = new Tile(tilesImages[40], ['BBB', 'WWW', 'SSS', 'WWW']);
    tiles[41] = new Tile(tilesImages[41], ['SSS','SSS','SSS','SSS']);
    tiles[42] = new Tile(tilesImages[42], ['SSS','SSS','SSS','SSS']);
    tiles[43] = new Tile(tilesImages[43], ['F1', 'SSS', 'SSS', 'SSS']);
    tiles[44] = new Tile(tilesImages[44], ['F2', 'SSS', 'SSS', 'SSS']);
    tiles[45] = new Tile(tilesImages[45], ['WWW', 'WWW', 'SSS', 'WWW']);
    tiles[46] = new Tile(tilesImages[46], ['WWW', 'WWW', 'SSS', 'DDD']);
    tiles[47] = new Tile(tilesImages[47], ['WWW', 'DDD', 'SSS', 'WWW']);

    tiles[48] = new Tile(tilesImages[48], ['SSS','SSS','SSS','SSS']);
    tiles[49] = new Tile(tilesImages[49], ['SSS','SSS','SSS','SSS']);
    tiles[50] = new Tile(tilesImages[50], ['WWW','SSS','SSS','SSS']);
    tiles[51] = new Tile(tilesImages[51], ['WWW','SSS','SSS','SSS']);
    tiles[52] = new Tile(tilesImages[52], ['WWW','BBB','SSS','SSS']);
    tiles[53] = new Tile(tilesImages[53], ['SSS','SSS','SSS','SSS']);
    tiles[54] = new Tile(tilesImages[54], ['BBB','WWW','SSS','SSS']);
    tiles[55] = new Tile(tilesImages[55], ['BBB','SSS','SSS','SSS']);
    tiles[56] = new Tile(tilesImages[56], ['BBB','SSS','SSS','WWW']);




    // Indexing tiles
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].index = i;
    }
    
    // // Rotating tiles, making graphics and removing duplicated
    // const initialTileCount = tiles.length;
    // for (let i = 0; i < initialTileCount; i++) {
    //     let tempTiles = [];
    //     for (let j = 0; j < 4; j++) {
    //         tempTiles.push(tiles[i].rotate(j));
    //     }
    //     tempTiles = removeDuplicatedTiles(tempTiles);
    //     tiles = tiles.concat(tempTiles);
    // }

    // // Removing tiles images
    // tiles = tiles.slice(initialTileCount);

    // Adjency rules
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        tile.analyze(tiles);
    }

    // Create grid
    startGrid();
}

function draw() {
    background(0);

    const w = width / DIM;
    const h = height / DIM;

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            let cell = grid[i + j * DIM];
            if (cell.collapsed) {
                let index = cell.options[0];
                image(tiles[index].img, i * w, j * h, w, h);
            } else {
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
    if (pick === undefined) {
        startGrid();
        return;
    }
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

function startGrid() {
    for (let i = 0; i < DIM * DIM; i++) {
        grid[i] = new Cell(tiles.length);
    }
}

/*
function mousePressed() {
    redraw();
}
*/