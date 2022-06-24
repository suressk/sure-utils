// export * from './.internal/constants'
// export * from './.internal/staticFucs'

/* Array function */
export * from './array'

// judge the value type
export { default as isUndefined } from './isUndefined'
export { default as isNull } from './isNull'
export { default as isSymbol } from './isSymbol'
export { default as isNumber } from './isNumber'
export { default as isString } from './isString'
export { default as isArray } from './isArray'
export { default as isPlainObject } from './isPlainObject'
export { default as isObject } from './isObject'
export { default as isDate } from './isDate'
export { default as isFunction } from './isFunction'
export { default as isMap } from './isMap'
export { default as isSet } from './isSet'
export { default as isPromise } from './isPromise'

// has funcs
export { default as hasOwnProp } from './hasOwnProp'
export { default as hasChanged } from './hasChanged'

// get values
export { default as getPrototype } from './getPrototype'

// HOF
export { default as debounce } from './debounce'

// remove the default export
// export default {
//   isUndefined
//   // ... others
// }
