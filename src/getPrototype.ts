import { getPrototypeOf } from './.internal/staticFucs'

/**
 * Get an object's prototype
 *
 * @param val the check value
 * @returns boolean
 */

const getPrototype = (val: unknown): object | null => getPrototypeOf(val)

export default getPrototype
