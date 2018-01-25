class ArrayQueue {
  constructor (initSize) {
    if (initSize < 0) {
      throw new Error('The init size is less than 0')
    }
    this.arr = new Array(initSize);
    this.size = 0;
    this.first = 0;
    this.last = 0;
  }

  peek () {
    if (this.size === 0) {
      return null;
    }
    return this.arr[this.first];
  }

  push (obj) {
    if (this.size === this.arr.length) {
      throw new Error('The queue is full')
    }
    this.size++
    this.arr[this.last] = obj
    this.last = this.last === (this.arr.length - 1) ? 0 : this.last + 1
  }

  poll () {
    if (this.size === 0) {
      throw new Error(`The queue is empty`)
    }
    this.size--;
    let temp = this.first
    this.first = this.first === (this.arr.length - 1) ? 0 : this.first + 1
    return this.arr[temp]
  }
}

const arrayQueue = new ArrayQueue(3)
arrayQueue.push(1)
arrayQueue.push(2)
arrayQueue.push(3)
console.log(arrayQueue.poll())
console.log(arrayQueue.poll())
console.log(arrayQueue.poll())
console.log(arrayQueue.poll())