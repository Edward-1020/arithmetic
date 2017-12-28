class Manacher {
  static manacherString (str) {
    let charArr = str.split('')
    let res = new Array(str.length * 2 + 1)
    let index = 0
    for (let i = 0; i !== res.length; i++) {
      res[i] = (i & 1) === 0 ? '#' : charArr[index++]
    }
    return res
  }

  static maxLcsLength (str) {
    if (!str || str.length === 0) {
      return 0
    }
    let charArr = Manacher.manacherString(str)
    let pArr= new Array(charArr.length)
    let C = -1
    let R = -1
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i !== charArr.length; i++) {
      pArr[i] = R > i ? Math.min(pArr[2 * C - i], R - i) : 1
      while (i + pArr[i] < charArr.length && i -pArr[i] > -1) {
        if (charArr[i + pArr[i]] === charArr[i - pArr[i]]) {
          pArr[i]++
        } else {
          break;
        }
        if (i + pArr[i] > R) {
          R = i + pArr[i]
          C = i
        }
        max = Math.max(max, pArr[i])
      }
    }
    return max - 1
  }

  static main () {
    let str = `abc123321ab`
    console.log(Manacher.maxLcsLength(str))
  }
}

Manacher.main()