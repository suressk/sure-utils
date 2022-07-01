/* Array funcs */
import { removeArrayItem, uniqArray } from './array'

// is funcs
import {
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
  isPromise
} from './is'

// has funcs
import { hasChanged, hasOwnProp } from './has'

// get values
import getPrototype from './getPrototype'

// HOF
import debounce from './debounce'

export {
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
  hasChanged,
  getPrototype,
  debounce,
  removeArrayItem,
  uniqArray
}

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
  hasChanged,
  getPrototype,

  debounce,

  removeArrayItem,
  uniqArray
}
