Array.prototype.myPush = function(addData) {
  return (this[this.length] = addData);
};

class Greed {
  constructor(rows, columns, startRow, startCol) {
    this.greedRows = rows;
    this.greedColums = columns;
    this.startRow = startRow;
    this.startCol = startCol;
    this.loop = 1;
    this.coordinates = [[startRow, startCol]];
    this.cursor = { row: startRow, col: startCol };
    this.search();
  }

  moveRight() {
    let calcMove = this.startCol + this.loop;
    let strCursorPos = this.cursor.col + 1;
    for (let index = strCursorPos; index <= calcMove; index += 1) {
      if (
        index <= this.greedColums - 1 &&
        index >= 0 &&
        this.cursor.row >= 0 &&
        this.cursor.row <= this.greedRows - 1
      ) {
        this.coordinates.myPush([this.cursor.row, index]);
      }
    }
    this.cursor.col = calcMove;
    return this;
  }

  moveBottom() {
    let calcMove = this.startRow + this.loop;
    let strCursorPos = this.cursor.row + 1;
    for (let index = strCursorPos; index <= calcMove; index += 1) {
      if (
        index <= this.greedRows - 1 &&
        index >= 0 &&
        this.cursor.col <= this.greedColums - 1 &&
        this.cursor.col >= 0
      ) {
        this.coordinates.myPush([index, this.cursor.col]);
      }
    }
    this.cursor.row = calcMove;
    return this;
  }

  moveLeft() {
    let calcMove = this.startCol - this.loop;
    let strCursorPos = this.cursor.col - 1;
    for (let index = strCursorPos; index >= calcMove; index -= 1) {
      if (
        index <= this.greedColums - 1 &&
        index >= 0 &&
        this.cursor.row >= 0 &&
        this.cursor.row <= this.greedRows - 1
      ) {
        this.coordinates.myPush([this.cursor.row, index]);
      }
    }
    this.cursor.col = calcMove;
    return this;
  }

  moveTop() {
    let calcMove = this.startRow - this.loop;
    let strCursorPos = this.cursor.row - 1;
    for (let index = strCursorPos; index >= calcMove; index -= 1) {
      if (
        index <= this.greedRows - 1 &&
        index >= 0 &&
        this.cursor.col <= this.greedColums - 1 &&
        this.cursor.col >= 0
      ) {
        this.coordinates.myPush([index, this.cursor.col]);
      }
    }
    this.cursor.row = calcMove;
    this.loop += 1;
    return this;
  }

  search() {
    let maxItem = this.greedRows * this.greedColums;
    while (this.coordinates.length < maxItem) {
      this.moveRight()
        .moveBottom()
        .moveLeft()
        .moveTop();
    }
  }

  printResult() {
    console.log(this.coordinates);
    console.log(this.coordinates.length);
  }
}

const greedQ = new Greed(5, 6, 0, 0);
greedQ.printResult();
