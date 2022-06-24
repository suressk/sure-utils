import isObject from '../isObject'

/**
 * Detect free variable `global` from Node.js.
 */
const freeGlobal = isObject(global) && global.Object === Object && global

export default freeGlobal
