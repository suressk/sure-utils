import isUndefined from './isUndefined'

/**
 * Check if `value` is `Element`
 *
 * @param el the check value
 * @returns boolean
 */
const isElement = (el: unknown): el is Element => {
  if (isUndefined(Element)) {
    return false
  }
  return el instanceof Element
}

export default isElement
