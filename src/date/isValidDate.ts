import { isDate } from '../is'

/**
 * Check `date` is valid or not
 * 判断日期是否有效
 *
 * @param val the check value
 * @returns {boolean} `true` / `false`
 *
 * example:
 *  isValidDate('December 22, 2018 03:25:08') => true
 *  isValidDate('2018-10-01 03:25:08') => true
 *  isValidDate('2018-10-01 25:08') => false
 */
const isValidDate = (val: string | number | Date): boolean => {
  if (!isDate(val)) {
    val = new Date(val)
  }
  return !Number.isNaN(val.valueOf())
}

export default isValidDate
