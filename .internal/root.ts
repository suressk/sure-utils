import freeGlobal from './freeGlobal'
import isObject from '../isObject'

/** Detect free variable `globalThis` */
const freeGlobalThis =
  isObject(globalThis) && globalThis.Object == Object && globalThis

/** Detect free variable `self`. */
const freeSelf = isObject(self) && self.Object === Object && self

/** Used as a reference to the global object. */
const root =
  freeGlobalThis || freeGlobal || freeSelf || Function('return this')()

export default root
