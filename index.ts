// export * from './.internal/constants'
// export * from './.internal/staticFucs'

/* Array function */
export * from './array'

// judge the value type
import isUndefined from './isUndefined'
import isNull from './isNull'
import isSymbol from './isSymbol'
import isNumber from './isNumber'
import isString from './isString'
import isArray from './isArray'
import isPlainObject from './isPlainObject'
import isObject from './isObject'
import isDate from './isDate'
import isFunction from './isFunction'
import isMap from './isMap'
import isSet from './isSet'
import isPromise from './isPromise'

import hasOwnProp from './hasOwnProp'
import hasChanged from './hasChanged'

export default {
  isUndefined,
  isNull,
  isSymbol,
  isNumber,
  isString,
  isArray,
  isPlainObject,
  isObject,
  isDate,
  isFunction,
  isMap,
  isSet,
  isPromise,

  hasOwnProp,
  hasChanged
}
