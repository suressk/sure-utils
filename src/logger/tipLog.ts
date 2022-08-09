import {
  _console,
  sureUtilsPrefix,
  tipPrefix
} from './constants'
import generateLogMsg from './generateLogMsg'

/**
 * sure-utils tip [msg content]
 * @param args
 */
const tipLog = (...args: string[]) => {
  const msgs = generateLogMsg(
    sureUtilsPrefix,
    tipPrefix,
    ...args
  )
  _console.log(...msgs)
}

export default tipLog
