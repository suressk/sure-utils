/** Used to check objects for own properties. */
export const hasOwnProperty = Object.prototype.hasOwnProperty

/* Used to transfer value for string */
export const objectToString = Object.prototype.toString

export const toTypeString = (val: unknown): string => {
  /*  */
  return objectToString.call(val)
}

/*  */
export const isArray = Array.isArray

export const isElement = (el: unknown): el is Element => {
  if (typeof Element === 'undefined') return false
  return el instanceof Element
}

export const isUndefined = (val: unknown): val is undefined => val === undefined

export const isNull = (val: unknown): val is null => val === null

export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isString = (val: unknown): val is string => typeof val === 'string'

export default {}
