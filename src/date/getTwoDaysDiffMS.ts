import { oneDayMilliseconds } from '../.internal/constants'

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
const getTwoDaysDiffMS = (d1: Date, d2: Date): number => Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / oneDayMilliseconds)

export default getTwoDaysDiffMS
