/**
 * Pause the program for a while (call it with `await`)
 * @param timeout pause time (`ms`)
 * @returns Promise
 */
const sleep = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

export default sleep
