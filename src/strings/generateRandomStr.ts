import { isArray } from '../is'
import { getRandomNum } from '../numbers'
import { randomLetters } from '../.internal/constants'

/**
 * Generate a random string with `numbers` & `upperCase letters` & `lowCase letters`
 *
 * @param randomStrLen random string length
 * @returns {string}
 *
 * example: getRandomStr() => 'SXvmGz8evn'
 */
const generateRandomStr = (
  randomStrLen = 10,
  letters?: string[]
): string => {
  /**
   * another way:
   * Math.random().toString(36).slice(2)
   * `toString()` radix argument must be between `2` and `36`
   * it can return 11 bits random letters (contains number & lowCase letters)
   * 固定长度为 11 位的随机字符串（数字 + 小写字母）
   */
  if (!letters || !letters.length || !isArray(letters)) {
    letters = randomLetters
  }
  const len = letters.length
  let res = ''
  for (let i = 0; i < randomStrLen; i++) {
    res += letters[getRandomNum(0, len)]
  }
  return res
}

export default generateRandomStr
