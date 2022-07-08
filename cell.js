class Cell {
    constructor(value) {
        this.collapse = false;
        if (value instanceof Array) {
            this.options = value;
        } else {
            this.options = new Array(value).fill(0).map((_, i) => i);
        }
    }
}