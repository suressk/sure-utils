/* Array funcs */
import { removeArrayItem, uniqArray } from './array'

// is funcs
import {
  isArray,
  isDate,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isPromise,
  isSet,
  isString,
  isSymbol,
  isUndefined
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
