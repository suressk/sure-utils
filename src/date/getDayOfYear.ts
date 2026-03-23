import { oneDayMilliseconds } from '../.internal/constants'

/**
 * Find the day of the year where the date is
 * 查找日期为那一年的第几天
 *
 * @param {Date} date Date
 * @returns {number} `days`
 *
 * example: getDayOfYear(new Date('2022-07-22')) => 203
 */
const getDayOfYear = (date: Date): number => ~~((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / oneDayMilliseconds)

export default getDayOfYear
