/**
 * Flip the string
 *
 * @param {string} str
 * @returns {string}
 *
 * example: reverseStr('hello world!') => '!dlrow olleh'
 */
const reverseStr = (str: string): string => str.split('').reverse().join('')

export default reverseStr
