class MergeSort {

	static mergeSort (arr) {
		if (arr === null || arr === undefined || arr.length < 2) {
			return
		}
		MergeSort._mergeSort(arr, 0, arr.length -1)
	}

	static _mergeSort(arr, l, r) {
		if (l === r) {
			return
		}
		let mid = l + ((r - l) >> 1)
		MergeSort._mergeSort(arr, l ,mid)
		MergeSort._mergeSort(arr, mid + 1, r)
		MergeSort.merge(arr, l, mid, r)
	}
	
	static merge(arr, l, m, r) {
		let help = new Array(r - l + 1)
		let i = 0
		let p1 = l
		let p2 = m + 1
		while (p1 <= m && p2 <= r) {
			help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
		}
		while (p1 <= m) {
			help[i++] = arr[p1++]
		}
		while (p2 <= r) {
			help[i++] = arr[p2++]
		}
		for (let i = 0; i < help.length; i++) {
			arr[l + i] = help[i]
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
      let arr1 = MergeSort.generateRandomArray(maxSize, maxValue)
      let arr2 = MergeSort.copyArray(arr1)
      MergeSort.mergeSort(arr1)
      MergeSort.comparator(arr2)
      if (!MergeSort.isEqual(arr1, arr2)) {
        succeed = false
        break
      }
    }

    console.log(succeed ? 'Nice!' : 'Fucking fucked!')
    console.log('\n')

    let arr = MergeSort.generateRandomArray(maxSize, maxValue)
    let arr1 = MergeSort.copyArray(arr)
    let arr2 = MergeSort.copyArray(arr)
    
    MergeSort.mergeSort(arr1)
    MergeSort.comparator(arr2)
    
    console.log('原数组')
    MergeSort.printArray(arr)

    console.log('排序')
    MergeSort.printArray(arr1)
    console.log('系统排序')
    MergeSort.printArray(arr2)
    
  }
}

MergeSort.main()