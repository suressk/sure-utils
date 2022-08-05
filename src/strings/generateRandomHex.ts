/**
 * Get a random hexadecimal color value
 * 获取随机的 16 进制颜色值
 * [`.padEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
 * 不足的位数用 0 填充（目标长度为 6）
 * @returns
 *
 * examples:
 *
 * `generateRandomHex()` => `'#f4d5a2'`
 * `generateRandomHex()` => `'#38fa9c3'`
 */
const generateRandomHex = () => `#${(~~(Math.random() * 0xFFFFFF)).toString(16).padEnd(6, '0')}`

export default generateRandomHex
