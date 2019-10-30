Array.prototype.last = function() {
  return this[this.length - 1];
};

function Greed(rows, columns, startRow, startCol) {
  this.coordinates = [[startRow, startCol]];
  let lap = 1;
  let cursor = [startRow, startCol];

  this.moveR = () => {
    let calcMove = startCol + lap;
    for (let index = cursor[1] + 1; index <= calcMove; index++) {
      if (index <= columns - 1 && cursor[0] >= 0) {
        this.coordinates.push([cursor[0], index]);
      }
    }
    cursor[1] = calcMove;
  };

  this.moveB = () => {
    let calcMove = startRow + lap;
    for (let index = cursor[0] + 1; index <= calcMove; index++) {
      if (index <= rows - 1 && index >= 0 && cursor[1] <= columns - 1) {
        this.coordinates.push([index, cursor[1]]);
      }
    }
    cursor[0] = calcMove;
  };

  this.moveL = () => {
    let calcMove = startCol - lap;
    for (let index = cursor[1] - 1; index >= calcMove; index--) {
      if (index >= 0 && index <= columns - 1 && cursor[0] <= rows - 1) {
        this.coordinates.push([cursor[0], index]);
      }
    }
    cursor[1] = calcMove;
  };
  this.moveT = () => {
    let calcMove = startRow - lap;
    for (let index = cursor[0] - 1; index >= calcMove; index--) {
      if (index >= 0 && cursor[1] >= 0) {
        this.coordinates.push([index, cursor[1]]);
      }
    }
    cursor[0] = calcMove;
    lap++;
  };
}
const greed = new Greed(5, 6, 1, 4);
let i = 0;
while (i < 4) {
  greed.moveR();
  greed.moveB();
  greed.moveL();
  greed.moveT();
  i++;
}

console.log(greed.coordinates.length);
