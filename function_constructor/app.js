function Private() {
  let method1 = () => {
    let private1 = "";
    return function(newData) {
      if (typeof newData === "string") {
        private1 = newData.toUpperCase();
      }
      return private1;
    };
  };

  let method2 = () => {
    let private2 = 1;
    return function(newData) {
      if (typeof newData === "number") {
        private2 += newData;
      }
      return private2;
    };
  };

  this.changePrivate1 = method1();
  this.changePrivate2 = method2();

  this.printResult = (private1, private2) => {
    console.log(
      `private1 = ${this.changePrivate1(
        private1
      )} private2 = ${this.changePrivate2(private2)}`
    );
  };
}
const test = new Private();
test.printResult("zz", 2);
