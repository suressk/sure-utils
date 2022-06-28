import { toTypeString } from './.internal/staticFucs'
import getPrototype from './getPrototype'
import {
  arrayTag,
  dateTag,
  mapTag,
  setTag,
  objectTag
} from './.internal/constants'

/**
 * Check if `value` is `null`
 *
 * @param val
 * @returns
 */
const isNull = (val: unknown): val is null => val === null

/**
 * Check if `value` is `undefined`
 *
 * @param val the check value
 * @returns boolean
 */
const isUndefined = (val: unknown): val is undefined => val === undefined

/**
 * Check if `value` is `string`
 *
 * @param val the check value
 * @returns boolean
 */
const isString = (val: unknown): val is string => typeof val === 'string'

/**
 * Check if `value` is `symbol`
 *
 * @param val the check value
 * @returns boolean
 */
const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

/**
 * Check if `value` is like an `object`
 *
 * @param val the check value
 * @returns boolean
 */
const isObject = (val: unknown): val is Record<any, any> => {
  return typeof val === 'object' && !isNull(val)
}

/**
 * Check if `value` is `array`
 *
 * @param val the check value
 * @returns boolean
 */
const isArray = (val: unknown): val is Array<any> => {
  if (Array.isArray) {
    return Array.isArray(val)
  }
  // call `Object.prototype.toString` to check it
  return isObject(val) && toTypeString(val) === arrayTag
}

/**
 * Check if `value` is `Date`
 *
 * @param val the check value
 * @returns boolean
 */
const isDate = (val: unknown): boolean => {
  // call `Object.prototype.toString` to check
  return isObject(val) && toTypeString(val) === dateTag
}

/**
 * Check if `value` is like an `function`
 *
 * @param val the check value
 * @returns boolean
 */
const isFunction = (val: unknown): val is Function => typeof val === 'function'

/**
 * Check if `value` is `map`
 *
 * @param val the check value
 * @returns boolean
 */
const isMap = (val: unknown): val is Map<any, any> => {
  return isObject(val) && toTypeString(val) === mapTag
}

/**
 * Check if `value` is `number`
 *
 * @param val the check value
 * @returns boolean
 */
const isNumber = (val: unknown): val is number => typeof val === 'number'

/**
 * Check if `value` is a `plain object`
 *
 * @param val the check value
 * @returns boolean
 */
const isPlainObject = (val: unknown): val is object => {
  if (!isObject(val) || toTypeString(val) !== objectTag) {
    return false
  }
  if (getPrototype(val) === null) {
    return true
  }
  let proto: object | null = val
  // it may be some plain object chain
  while (getPrototype(proto) !== null) {
    proto = getPrototype(proto)
  }
  // proto is Object.prototype
  return getPrototype(val) === proto
}

/**
 * Check if `value` is `Promise`
 *
 * @param {unknown} val the check value
 * @returns {boolean} boolean
 */
const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * Check if `value` is `set`
 *
 * @param val the check value
 * @returns boolean
 */
const isSet = (val: unknown): val is Set<any> => {
  return isObject(val) && toTypeString(val) === setTag
}

export {
  isNull,
  isUndefined,
  isString,
  isSymbol,
  isObject,
  isArray,
  isFunction,
  isDate,
  isMap,
  isSet,
  isNumber,
  isPlainObject,
  isPromise
}
