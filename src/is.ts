import { toTypeString } from './.internal/staticFucs'
import getPrototype from './getPrototype'
import {
  ARRAY_TAG,
  DATE_TAG,
  MAP_TAG,
  OBJECT_TAG,
  SET_TAG
} from './.internal/constants'

/**
 * Check if `value` is `null`
 *
 * @param val
 * @returns
 */
export const isNull = (val: unknown): val is null => val === null

/**
 * Check if `value` is `undefined`
 *
 * @param val the check value
 * @returns boolean
 */
export const isUndefined = (val: unknown): val is undefined => val === undefined || typeof val === 'undefined'

/**
 * Check if `value` is `string`
 *
 * @param val the check value
 * @returns boolean
 */
export const isString = (val: unknown): val is string => typeof val === 'string'

/**
 * Check if `value` is `symbol`
 *
 * @param val the check value
 * @returns boolean
 */
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

/**
 * Check if `value` is like an `Object`
 *
 * @param val the check value
 * @returns boolean
 */
export const isObject = (val: unknown): val is Record<any, any> => {
  return typeof val === 'object' && !isNull(val)
}

/**
 * Check if `value` is `Array`
 *
 * @param val the check value
 * @returns boolean
 */
export const isArray = <T>(val: unknown): val is Array<T> => {
  if (Array.isArray) {
    return Array.isArray(val)
  }
  // call `Object.prototype.toString` to check it
  return isObject(val) && toTypeString(val) === ARRAY_TAG
}

/**
 * Check if `value` is `Date`
 *
 * @param val the check value
 * @returns boolean
 */
export const isDate = (val: unknown): boolean => {
  // call `Object.prototype.toString` to check
  return isObject(val) && toTypeString(val) === DATE_TAG
}

/**
 * Check if `value` is like an `function`
 *
 * @param val the check value
 * @returns boolean
 */
export const isFunction = (val: unknown): val is Function => typeof val === 'function'

/**
 * Check if `value` is `number`
 *
 * @param val the check value
 * @returns boolean
 */
export const isNumber = (val: unknown): val is number => typeof val === 'number'

/**
 * Check if `value` is a `plain object`
 *
 * @param val the check value
 * @returns boolean
 */
export const isPlainObject = (val: unknown): val is object => {
  if (!isObject(val) || toTypeString(val) !== OBJECT_TAG) {
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
export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * Check if `value` is `Map`
 *
 * @param val the check value
 * @returns boolean
 */
export const isMap = (val: unknown): val is Map<any, any> => {
  return isObject(val) && toTypeString(val) === MAP_TAG
}

/**
 * Check if `value` is `Set`
 *
 * @param val the check value
 * @returns boolean
 */
export const isSet = (val: unknown): val is Set<any> => {
  return isObject(val) && toTypeString(val) === SET_TAG
}

/**
 * Check if `value` is `Element`
 *
 * @param el the check value
 * @returns boolean
 */
export const isElement = (el: unknown): el is Element => {
  if (isUndefined(Element)) {
    return false
  }
  return el instanceof Element
}
