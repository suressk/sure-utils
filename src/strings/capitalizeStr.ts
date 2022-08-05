/**
 * Capitalize (uppercase) the first letter of the English string
 *
 * @param {string} str
 * @returns {string}
 *
 * example: `capitalize('hello world!')` => `'Hello world!'`
 */
const capitalizeStr = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export default capitalizeStr
