/** Used to check objects for own properties. */
export const hasOwnProperty = Object.prototype.hasOwnProperty

/* Used to transfer value for string */
export const objectToString = Object.prototype.toString

export const toTypeString = (val: unknown): string => {
  /* get the RowType as [object RowType] */
  return objectToString.call(val)
}

/*  */
export const isArray = Array.isArray

/*
 * Check if `value` is an `Element`
 * 
 * @param {unknown} the value to check
 * @returns {boolean} value is Element
 */
export const isElement = (el: unknown): el is Element => {
  if (typeof Element === 'undefined') return false
  return el instanceof Element
}
