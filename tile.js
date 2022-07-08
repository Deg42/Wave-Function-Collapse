class Tile {
    constructor(img, edges) {
        this.img = img;
        this.edges = edges;
    }

    rotate(num) {
        const w = this.img.width
        const h = this.img.height
        const newImg = createGraphics(w, h);
        newImg.imageMode(CENTER);
        newImg.translate(w / 2, h / 2);
        newImg.rotate(HALF_PI * num);
        newImg.image(this.img, 0, 0);

        const newEdges = [];
        const len = this.edges.length;
        for (let i = 0; i < this.edges.length; i++) {
            newEdges[i] = this.edges[(i - num + len) % len];
        }

        return new Tile(newImg, newEdges);
    }
}