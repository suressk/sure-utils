import {
  _console,
  sureUtilsPrefix,
  warnPrefix
} from './constants'
import generateLogMsg from './generateLogMsg'

/**
 * sure-utils warn [msg content]
 * @param args
 */
const warnLog = (...args: string[]) => {
  const msgs = generateLogMsg(
    sureUtilsPrefix,
    warnPrefix,
    ...args
  )
  _console.warn(...msgs)
}

export default warnLog
