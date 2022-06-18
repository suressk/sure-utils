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

export default {
  removeArrayItem
}
