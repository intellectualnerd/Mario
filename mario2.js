var rows = 12, cols = 16;

class Box {
    //width and height is in pixels
    constructor(id, name, width, height, cssClass) {
        this.id = id;
        this.name = name;
        this.width = width;
        this.height = height;
        this.cssClass = cssClass;
    }
    getDiv() {
        const boxDiv = document.createElement("div");
        boxDiv.className = "box " + this.cssClass;
        boxDiv.style = "width: " + this.width + "; height: " + this.height + ";";
        return boxDiv;
    }
}

function getBoxFromId(id) {
    if (id == 0) //sky
        return new Box(0, "sky", 20, 20, "sky");
    else if (id == 1) //land
        return new Box(0, "land", 20, 20, "land");
    else if (id == 2) //wall
        return new Box(0, "wall", 20, 20, "wall");
}

var gameBoard = [];
for (let p = 0; p < rows; p++) {
    gameBoard[p] = [];
    for (let q = 0; q < cols; q++) {
        gameBoard[p][q] = 0;
    }
}

function printGameBoard() {
    const gameBoard = document.getElementById("gameBoard");
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < cols; j++) {
            row.appendChild(getBoxFromId(gameBoard[i][j]).getDiv());
        }
        gameBoard.appendChild(row);
    }


}
printGameBoard();