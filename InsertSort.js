class InsertSort {
  static insertSort (arr) {
    if (arr === null || arr === undefined || arr.length < 2) {
      return
    }

    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0 && arr[j] > arr[j+1]; j--) {
        InsertSort.swap(arr, j, j+1)
      }
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
      let arr1 = InsertSort.generateRandomArray(maxSize, maxValue)
      let arr2 = InsertSort.copyArray(arr1)
      InsertSort.insertSort(arr1)
      InsertSort.comparator(arr2)
      if (!InsertSort.isEqual(arr1, arr2)) {
        succeed = false
        break
      }
    }

    console.log(succeed ? 'Nice!' : 'Fucking fucked!')
    console.log('\n')

    let arr = InsertSort.generateRandomArray(maxSize, maxValue)
    let arr1 = InsertSort.copyArray(arr)
    let arr2 = InsertSort.copyArray(arr)
    
    InsertSort.insertSort(arr1)
    InsertSort.comparator(arr2)
    
    console.log('原数组')
    InsertSort.printArray(arr)

    console.log('排序')
    InsertSort.printArray(arr1)
    console.log('系统排序')
    InsertSort.printArray(arr2)
    
  }
}

InsertSort.main()