/**
 * Convert `Hex` to `RGB`
 * 将 16 进制颜色值 转换为 rgb 颜色值
 *
 * @param hexColor
 * @returns
 *
 * example:
 *  `convertHexToRgb('#ffffff')` => `'RGB(255, 255, 255)'` => success
 *  `convertHexToRgb('#ffff0')` => `'#ffff0'` => failed
 */
const convertHexToRgb = (hexColor: string) => {
  let sColor = hexColor.toLowerCase()
  // 16 进制颜色值
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    // 处理六位的颜色值
    const sColorChange = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`))
    }
    return `RGB(${sColorChange.join(',')})`
  }
  return sColor
}

export default convertHexToRgb
