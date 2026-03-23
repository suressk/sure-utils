/**
 * Get the timeFormat from date (`hour:minutes:seconds`)
 * 时间格式化：从日期获取 `时:分:秒`
 *
 * @param {Date} date
 * @returns {string} `hour:minutes:seconds`
 *
 * example: getTimeFromDate(new Date()) => '13:06:45'
 */
const getTimeFromDate = (date: Date): string => date.toTimeString().slice(0, 8)

export default getTimeFromDate
