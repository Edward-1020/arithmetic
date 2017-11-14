class SelectionSort {
  static selectionSort (arr) {
    if (arr === null || arr === undefined || arr.length < 2) {
      return
    }

    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        minIndex = arr[j] < arr[minIndex] ? j : minIndex
      }
      SelectionSort.swap(arr, i, minIndex)
    }
  }

  static swap (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
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
      let arr1 = SelectionSort.generateRandomArray(maxSize, maxValue)
      let arr2 = SelectionSort.copyArray(arr1)
      SelectionSort.selectionSort(arr1)
      SelectionSort.comparator(arr2)
      if (!SelectionSort.isEqual(arr1, arr2)) {
        succeed = false
        break
      }
    }

    console.log(succeed ? 'Nice!' : 'Fucking fucked!')
    console.log('\n')

    let arr = SelectionSort.generateRandomArray(maxSize, maxValue)
    let arr1 = SelectionSort.copyArray(arr)
    let arr2 = SelectionSort.copyArray(arr)
    
    SelectionSort.selectionSort(arr1)
    SelectionSort.comparator(arr2)
    
    console.log('原数组')
    SelectionSort.printArray(arr)

    console.log('排序')
    SelectionSort.printArray(arr1)
    console.log('系统排序')
    SelectionSort.printArray(arr2)
    
  }
}

SelectionSort.main()