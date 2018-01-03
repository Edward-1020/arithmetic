class BFPRT {
	static getMinKthByBFPRT(arr, K) {
		if (k < 1 || k > arr.length || !arr.length) {
			return -1;
		}
		let copyArr = BFPRT.copyArray(arr);
		return BFPRT.select(copyArr, 0, copyArr.length - 1, K - 1);
	}

	static copyArray(arr) {
		let res = [];
		for (let i = 0; i < arr.length; i++) {
			res[i] = arr[i];
		}
		return res;
	}

  static select (arr, begin, end, i) {
    if (begin === end) {
      return arr[begin]
    }
    let pivot = BFPRT.medianOfMedians(arr, begin, end)
    let pivotRange = BFPRT.partition(arr, begin, end, pivot)
    if (i >= pivotRange[0] && i<= pivotRange[1]) {
      return arr[i]
    } else if (i < pivotRange[0]) {
      return BFPRT.select(arr, begin, pivotRange[0] - 1, i)
    } else {
      return BFPRT.select(arr, pivotRange[1] + 1, end, i)
    }
  }

  static medianOfMedians (arr, begin, end) {
    let num = end - begin + 1
    let offset = num % 5 === 0 ? 0 : 1
    let mArr = new Array((num / 5 | 0) + offset)
    for (let i = 0; i < mArr.length; i++) {
      let beginI = begin + i * 5
      let endI = beginI + 4
      mArr[i] = BFPRT.getMedian(arr, beginI, Math.min(end, endI))
    }
    return BFPRT.select(mArr, 0, mArr.length - 1, mArr.length / 2)
  }

  static partition (arr, l, r, pivotValue) {
    let less = l - 1
    let more = r + 1
    while (l != more) {
      if (arr[l] < pivotValue) {
        BFPRT.swap(arr, ++less, l++)
      } else if (arr[l] > pivotValue) {
        BFPRT.swap(arr, --more, l)
      } else {
        l++
      }
    }
    return new Array(less + 1, more - 1)
  }

  static getMedian (arr, begin, end) {
    BFPRT.insertSort(arr, begin, end)
    let sum = begin + end
    let mid = (sum / 2 | 0) + (sum % 2)
    return arr[mid]
  }

  static insertSort (arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
        BFPRT.swap(arr, j, j + 1)
      }
    }
    return arr
  }
  
  static swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  static main () {
    let arr = [6, 9, 1, 3, 1, 2, 2, 5, 6, 1, 3, 5, 9, 7, 2, 5, 6, 1, 9 ];
    console.log(BFPRT.insertSort(BFPRT.copyArray(arr)))
    console.log(BFPRT.getMinKthByBFPRT(arr, 10))
  }
}

BFPRT.main()
