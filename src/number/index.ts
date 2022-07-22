/**
 * Get a random integer num between `min` to `max`
 * 获取区间随机整数（区间：[min, max) ）
 *
 * @param min the min integer (`contain`)
 * @param max the max integer (`not contain`)
 * @returns {number} an integer in `[min, max)`
 * */
export const getRandomNum = (min = 0, max = 100): number => {
  return ~~(Math.random() * (max - min) + min)
}

/**
 * Get the average
 * 获取平均值（保留两位小数）
 * @param args
 * @returns
 */
export const getAverage = (...args: number[]) => {
  const len = args.length
  if (len === 0) {
    return 0
  }
  return Number(args.reduce((prev, next) => (prev + next), 0).toFixed(2))
}
