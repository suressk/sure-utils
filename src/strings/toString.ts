import {
  isArray,
  isNull,
  isString,
  isSymbol,
  isUndefined
} from '../is'

// const INFINITY = 1 / 0

/**
 * Converts `value` to a string
 * @param val
 * @returns
 *
 * examples:
 *
 * `toString(null)` => `''`
 *
 * `toString(-0)` => `'-0'`
 *
 * `toString([1, 2, 3])` => `'1,2,3'`
 */
const toString = (val: unknown): string => {
  if (isNull(val) || isUndefined(val)) {
    return ''
  }
  if (isString(val)) {
    return val
  }
  if (isSymbol(val)) {
    return val.toString()
  }
  if (isArray(val)) {
    return `${val.map(item => (item === null ? item : toString(item)))}`
  }
  const result = `${val}`
  return (result === '0' && (1 / Number(val)) === -Infinity) ? '-0' : result
}

export default toString
