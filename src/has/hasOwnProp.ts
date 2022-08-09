import { hasOwnProperty } from '../.internal/staticFucs'

/**
 * Check the key is the val own property
 *
 * @param {object} val the check value
 * @param {string | symbol} key the check key
 * @returns boolean
 */
const hasOwnProp = (
  val: object,
  key: string | symbol
): key is keyof typeof val => hasOwnProperty.call(val, key)

export default hasOwnProp
