/**
 * Get now time and format to be `xxxx-xx-xx xx:xx:xx`
 * @returns
 *
 * example: getNowTime() => `'2022-07-25 15:18:34'`
 */
const getNowTimeStr = () => (new Date()).toLocaleString().replaceAll('/', '-')

export default getNowTimeStr
