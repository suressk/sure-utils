// export * from './.internal/constants'
// export * from './.internal/staticFucs'

/* Array function */
export * from './array'

import isUndefined from './isUndefined'
import isNull from './isNull'
import isSymbol from './isSymbol'
import isNumber from './isNumber'
import isString from './isString'
import isArray from './isArray'
import isPlainObject from './isPlainObject'
import isObjectLike from './isObjectLike'
import isDate from './isDate'

export default {
  isUndefined,
  isNull,
  isSymbol,
  isNumber,
  isString,
  isArray,
  isPlainObject,
  isObjectLike,
  isDate,
}
