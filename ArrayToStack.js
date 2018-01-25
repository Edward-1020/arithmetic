class ArrayStack {

  constructor (initSize) {
    if (initSize < 0) {
      throw new Error("The init size is less than 0");
    }
    this.arr = new Array(initSize);
    this.size = 0;
  }

  peek () {
    if (this.size === 0) {
      return null;
    }
    return this.arr[this.size - 1];
  }

  push (obj) {
    if (this.size === this.arr.length) {
      throw new Error("The queue is full");
    }
    this.arr[this.size++] = obj;
  }

  pop () {
    if (this.size === 0) {
      throw new Error("The queue is empty");
    }
    return this.arr[--this.size];
  }
}

const arrayStack = new ArrayStack(3)
arrayStack.push(1)
arrayStack.push(2)
arrayStack.push(3)
console.log(arrayStack.pop())