function Private() {
  let private1 = "";
  let private2 = 1;

  let method1 = () => {
    return function(newData) {
      if (typeof newData === "string") {
        private1 = newData.toUpperCase();
      }
      return private1;
    };
  };

  let method2 = () => {
    return function(newData) {
      if (typeof newData === "number") {
        private2 += newData;
      }
      return private2;
    };
  };

  this.changePrivate1 = method1();
  this.changePrivate2 = method2();
  this.changePrivate3 = newData => {
    private1 = newData.toUpperCase();
  };
  this.changePrivate4 = newData => {
    private2 += newData;
  };

  this.printResult = () => {
    console.log(`private1 = ${private1} private2 = ${private2}`);
  };
}
const test = new Private();
console.log(test.private1);
console.log(test.private2);
console.log(test.method1);
console.log(test.method2);
test.changePrivate1("best");
test.changePrivate2(1);
test.printResult();
test.changePrivate3("test");
test.changePrivate4(1);
test.printResult();
test.changePrivate4(1);
test.changePrivate4(5);
test.printResult();
