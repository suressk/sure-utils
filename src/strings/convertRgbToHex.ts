/**
 * Convert `RGB` to `Hex`
 * 将 rgb 颜色值转换为 16 进制颜色值
 *
 * @param r
 * @param g
 * @param b
 * @returns
 *
 * example: `convertRgbToHex(255, 255, 255)` => `'#ffffff'`
 */
const convertRgbToHex = (
  r: number,
  g: number,
  b: number
) => {
  if (
    r < 0 || r > 255
    || g < 0 || g > 255
    || b < 0 || b > 255
  ) {
    throw new Error('s')
  }
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

export default convertRgbToHex
