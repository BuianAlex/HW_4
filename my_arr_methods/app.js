Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i += 1) {
    callback(this[i]);
  }
};

[1, 2, 3].myForEach(item => console.log(item));

Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i += 1) {
    result.push(callback(this[i]));
  }
  return result;
};

const afterMap = [1, 2, 3].myMap(item => {
  return item * 2;
});
console.log(afterMap);

Array.prototype.mySort = function() {
  for (let i = 0; i < this.length; i += 1) {
    for (let j = 0; j < this.length - 1; j += 1) {
      if (this[j] > this[j + 1]) {
        let tempStor = this[j + 1];
        this[j + 1] = this[j];
        this[j] = tempStor;
      }
    }
  }
};
let testArr = [3, 2, 1, 3];
testArr.mySort();
console.log(testArr);
