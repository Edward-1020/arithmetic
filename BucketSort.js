class BucketSort {
  
  static bucketSort (arr) {
    if (arr === null || arr === undefined || arr.length < 2) {
      return
    }
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < arr.length; i++) {
      max = Math.max(max, arr[i])
    }
    let bucket = []
    for (let i = 0; i < arr.length; i++) {
      bucket[arr[i]] ? bucket[arr[i]]++ : 0
    }
    let i = 0
    for (let j = 0; j < bucket.length; j++) {
      while (bucket[j]-- > 0) {
        arr[i++] = j
      }
    }
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
      let arr1 = BucketSort.generateRandomArray(maxSize, maxValue)
      let arr2 = BucketSort.copyArray(arr1)
      BucketSort.bucketSort(arr1)
      BucketSort.comparator(arr2)
      if (!BucketSort.isEqual(arr1, arr2)) {
        succeed = false
        break
      }
    }

    console.log(succeed ? 'Nice!' : 'Fucking fucked!')
    console.log('\n')

    let arr = BucketSort.generateRandomArray(maxSize, maxValue)
    let arr1 = BucketSort.copyArray(arr)
    let arr2 = BucketSort.copyArray(arr)
    
    BucketSort.bucketSort(arr1)
    BucketSort.comparator(arr2)
    
    console.log('原数组')
    BucketSort.printArray(arr)

    console.log('排序')
    BucketSort.printArray(arr1)
    console.log('系统排序')
    BucketSort.printArray(arr2)
    
  }
}
  
BucketSort.main()