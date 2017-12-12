class HeapSort {

  static heapSort (arr) {
    if (arr === null || arr === undefined || arr.length < 2) {
      return
    }
    for (let i = 0; i < arr.length; i++) {
      HeapSort.heapInsert(arr, i)
    }
    let size = arr.length
    HeapSort.swap(arr, 0, --size)
    while (size > 0) {
      HeapSort.heapify(arr, 0, size)
      HeapSort.swap(arr, 0, --size)
    }
  }

  static heapInsert (arr, index) {
    while (arr[index] > arr[(index - 1) / 2 | 0]) {
      HeapSort.swap(arr, index, (index - 1) / 2 | 0)
      index = (index  - 1) / 2 | 0
    }
  }

  static heapify (arr, index, size) {
    let left = index * 2 + 1
    while (left < size) {
      let largest = ((left + 1 < size) && (arr[left + 1] > arr[left])) ? left + 1 : left
      largest = arr[largest] > arr[index] ? largest : index
      if (largest === index) {
        break
      }
      HeapSort.swap(arr, largest, index)
      index = largest
      left = index * 2 + 1
    }
  }

  static swap (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  //  for test
  static comparator (arr) {
    arr.sort((a, b) => {
      return a - b
    })
  }

  //  for test
  static generateRandomArray (maxSize, maxValue) {
    let arr = new Array((maxSize + 1) * Math.random() | 0)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = ((maxValue + 1) * Math.random() - maxValue * Math.random()) | 0
    }
    return arr
  }

  //  for test
  static copyArray (arr) {
    if (arr === null || arr === undefined) {
      return null
    }
    let res = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
      res[i] = arr[i]
    }
    return res
  }

  //  for test
  static isEqual (arr1, arr2) {
    if ((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
      return false
    }

    if ((arr1 === undefined && arr2 !== undefined) || (arr1 !== undefined && arr2 === undefined)) {
      return false
    }

    if (arr1 === null && arr2 === null) {
      return true
    }

    if (arr1 === undefined && arr2 === undefined) {
      return true
    }
  
    if (arr1.length !== arr2.length) {
      return false
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }

    return true
  }

  static printArray (arr) {
    if (arr === null) {
      return
    }

    if (arr === undefined) {
      return
    }

    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str += arr[i] + ' '
    } 
    console.log(str)

    console.log('\n')
  }

  static main () {
    let testTime = 10
    let maxSize = 100
    let maxValue = 100
    let succeed = true

    for (let i = 0; i < testTime; i++) {
      let arr1 = HeapSort.generateRandomArray(maxSize, maxValue)
      let arr2 = HeapSort.copyArray(arr1)
      HeapSort.heapSort(arr1)
      HeapSort.comparator(arr2)
      if (!HeapSort.isEqual(arr1, arr2)) {
        succeed = false
        break
      }
    }

    console.log(succeed ? 'Nice!' : 'Fucking fucked!')
    console.log('\n')

    let arr = HeapSort.generateRandomArray(maxSize, maxValue)
    let arr1 = HeapSort.copyArray(arr)
    let arr2 = HeapSort.copyArray(arr)
    
    HeapSort.heapSort(arr1)
    HeapSort.comparator(arr2)
    
    console.log('原数组')
    HeapSort.printArray(arr)

    console.log('排序')
    HeapSort.printArray(arr1)
    console.log('系统排序')
    HeapSort.printArray(arr2)
    
  }
}

HeapSort.main()