class QuickSort {

  static quickSort (arr) {
    if (arr === null || arr === undefined || arr.length < 2) {
      return
    }
    QuickSort.quickSortSub(arr, 0, arr.length - 1)
  }

  static quickSortSub (arr, l, r) {
    if (l < r) {
      QuickSort.swap(arr, (l + Math.random() * (r - l + 1) | 0), r)
      let p = QuickSort.partition(arr, l, r)
      QuickSort.quickSortSub(arr, l, p[0] - 1)
      QuickSort.quickSortSub(arr, p[1] + 1, r)
    }
  }

  static partition (arr, l, r) {
    let less = l - 1
    let more = r
    while (l < more) {
      if (arr[l] < arr[r]) {
        QuickSort.swap(arr, ++less, l++)
      } else if (arr[l] > arr[r]) {
        QuickSort.swap(arr, --more, l)
      } else {
        l++
      }
    }
    QuickSort.swap(arr, more, r)
    return new Array(less + 1, more)
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
      let arr1 = QuickSort.generateRandomArray(maxSize, maxValue)
      let arr2 = QuickSort.copyArray(arr1)
      QuickSort.quickSort(arr1)
      QuickSort.comparator(arr2)
      if (!QuickSort.isEqual(arr1, arr2)) {
        succeed = false
        break
      }
    }

    console.log(succeed ? 'Nice!' : 'Fucking fucked!')
    console.log('\n')

    let arr = QuickSort.generateRandomArray(maxSize, maxValue)
    let arr1 = QuickSort.copyArray(arr)
    let arr2 = QuickSort.copyArray(arr)
    
    QuickSort.quickSort(arr1)
    QuickSort.comparator(arr2)
    
    console.log('原数组')
    QuickSort.printArray(arr)

    console.log('排序')
    QuickSort.printArray(arr1)
    console.log('系统排序')
    QuickSort.printArray(arr2)
    
  }
}

QuickSort.main()