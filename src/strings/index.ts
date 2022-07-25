import { getRandomNum } from '../numbers'
import { randomLetters } from '../.internal/constants'

/**
 * Capitalize the first letter of the English string
 *
 * @param {string} str
 * @returns {string}
 *
 * example: capitalize('hello world!') => 'Hello world!'
 */
export const capitalizeStr = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Flip the string
 *
 * @param {string} str
 * @returns {string}
 *
 * example: reverseStr('hello world!') => '!dlrow olleh'
 */
export const reverseStr = (str: string): string => str.split('').reverse().join('')

/**
 * Generate a random string with `numbers` and `uppercase letters`
 *
 * @param randomStrLen random string length
 * @returns {string}
 *
 * example: getRandomStr() => '6HG8ASDHLF'
 */
export const getRandomStr = (randomStrLen = 10): string => {
  /**
   * another way:
   * Math.random().toString(36).slice(2)
   *
   * 固定长度为 11 位的随机字符串（数字 + 小写字母）
   */
  const len = randomLetters.length
  let res = ''
  for (let i = 0; i < randomStrLen; i++) {
    res += randomLetters[getRandomNum(0, len)]
  }
  return res
}

/**
 * Truncate a string of specified length
 * 截断指定长度的字符串，剩余字符省略号表示
 *
 * @param str
 * @param len
 * @returns
 *
 * example: truncateStr('Truncate a string of specified length', 17) => 'Truncate a str...'
 */
export const truncateStr = (str: string, len?: number) => {
  if (len === undefined) {
    return str
  }
  return str.length < len ? str : `${str.slice(0, len - 3)}...`
}

/**
 * Strip HTML elements from a string
 * 去除字符串中的 HTML 元素
 *
 * @param htmlStr
 * @returns
 */
export const stripHtmlEl = (htmlStr: string) => (new DOMParser().parseFromString(htmlStr, 'text/html')).body.textContent || ''

/**
 * Convert `RGB` to `Hex`
 * 将 rgb 颜色值转换为 16 进制颜色值
 *
 * @param r
 * @param g
 * @param b
 * @returns
 *
 * example: convertRgbToHex(255, 255, 255) => '#ffffff'
 */
export const convertRgbToHex = (
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

/**
 * Get a random hexadecimal color value
 * 获取随机的 16 进制颜色值
 * [`.padEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
 * 不足的位数用 0 填充（目标长度为 6）
 * @returns
 */
export const getRandomHex = () => `#${(~~(Math.random() * 0xFFFFFF)).toString(16).padEnd(6, '0')}`
