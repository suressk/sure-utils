import { isDate } from '../is'
import { oneDayMilliseconds } from '../.internal/constants'

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
export const isValidDate = (val: string | number | Date): boolean => {
  if (!isDate(val)) {
    val = new Date(val)
  }
  return !Number.isNaN(val.valueOf())
}

/**
 * Get milliseconds of two days
 * 获取两日期时间间隔（ms）
 *
 * @param {Date} d1 Date1
 * @param {Date} d2 Date2
 * @returns {number} `diffMilliseconds`
 *
 * example: getTwoDaysDiffMS(new Date('2021-08-09'), new Date('2022-07-22'))
 */
export const getTwoDaysDiffMS = (d1: Date, d2: Date): number => Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / oneDayMilliseconds)

/**
 * Find the day of the year where the date is
 * 查找日期为那一年的第几天
 *
 * @param {Date} date Date
 * @returns {number} `days`
 *
 * example: getDayOfYear(new Date('2022-07-22')) => 203
 */
export const getDayOfYear = (date: Date): number => ~~((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / oneDayMilliseconds)

/**
 * Get the timeFormat from date (`hour:minutes:seconds`)
 * 时间格式化：从日期获取 `时:分:秒`
 *
 * @param {Date} date
 * @returns {string} `hour:minutes:seconds`
 *
 * example: getTimeFromDate(new Date()) => '13:06:45'
 */
export const getTimeFromDate = (date: Date): string => date.toTimeString().slice(0, 8)

/**
 * Get now time and format to be `xxxx-xx-xx xx:xx:xx`
 * @returns
 *
 * example: getNowTime() => `'2022-07-25 15:18:34'`
 */
export const getNowTimeStr = () => (new Date()).toLocaleString().replaceAll('/', '-')
