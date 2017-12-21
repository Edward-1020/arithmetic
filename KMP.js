class KMP {
  static getIndexOf (str1, str2) {
    if (!str1 || !str2 || str2.length < 1 || str1.length < str2.length) {
      return -1
    }
    let str1Arr = str1.split('')
    let str2Arr = str2.split('')
    let str1Index = 0
    let str2Index = 0
    let next = KMP.getNextArray(str2Arr)
    while (str1Index < str1Arr.length && str2Index < str2Arr.length) {
      if (str1Arr[str1Index] === str2Arr[str2Index]) {
        str1Index++
        str2Index++
      } else if (next[str2Index] === -1) {
        str1Index++
      } else {
        str2Index = next[str2Index]
      }
    }
    return str2Index === str2Arr.length ? str1Index - str2Index : -1
  }

  static getNextArray (str2Arr) {
    if (str2Arr.length === 1) {
      return [-1]
    }
    let next = []
    next[0] = -1
    next[1] = 0
    let pos = 2
    let cn = 0
    while (pos < str2Arr.length) {
      if (str2Arr[pos - 1] === str2Arr[cn]) {
        next[pos++] = ++cn
      } else if (cn > 0) {
        cn = next[cn]
      } else {
        next[pos++] = 0
      }
    }
    return next
  }

  static main () {
		let str = 'abcabcababaccc'
    let match = 'ababa'   
    console.log(KMP.getIndexOf(str, match))
  }
}

KMP.main()