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
const truncateStr = (str: string, len?: number) => {
  if (len === undefined) {
    return str
  }
  return str.length < len ? str : `${str.slice(0, len - 3)}...`
}
export default truncateStr
