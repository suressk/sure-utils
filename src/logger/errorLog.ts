import {
  _console,
  errorPrefix,
  sureUtilsPrefix
} from './constants'
import generateLogMsg from './generateLogMsg'

/**
 * sure-utils error [msg content]
 * @param args
 */
const errorLog = (...args: string[]) => {
  const msgs = generateLogMsg(
    sureUtilsPrefix,
    errorPrefix,
    ...args
  )
  _console.error(...msgs)
}

export default errorLog
