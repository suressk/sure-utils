import { isFunction } from '../is'

/**
 * Used to remove an item of the array
 *
 * @param arr the origin array
 * @param el the remove item
 */
export const removeArrayItem = <T>(arr: T[], el: T) => {
  const i = arr.indexOf(el)
  if (i > -1) {
    arr.splice(i, 1)
  }
}

/**
 * Used to remove the mutiple items (shallow uniq)
 *
 * @param arr need uniq array
 */
export const uniqArray = <T>(arr: T[]) => {
  if (!arr || !arr.length) {
    return []
  }
  if (Set && isFunction(Set)) {
    return Array.from(new Set(arr))
  }
  return arr
}
