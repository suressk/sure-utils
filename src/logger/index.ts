import {
  SPLIT_TAG,
  color,
  errorPrefix,
  sureUtilsPrefix,
  tipPrefix,
  warnPrefix
} from './constants'

// use '_' to avoid eslint check (no-console)
const _console = console

const addStyle = (str: string, styles: string) => {
  const strArr = str.split(SPLIT_TAG)
  strArr[1] = strArr[1] ? `${strArr[1]}${styles};` : styles
  return strArr.join(SPLIT_TAG)
}

export const colorUtils = {
  bold: (str: string) => {
    return addStyle(str, 'font-weight: bold;')
  },
  white: (str: string) => {
    return addStyle(str, `color: ${color.white};`)
  },
  black: (str: string) => {
    return addStyle(str, `color: ${color.black};`)
  },
  cyan: (str: string) => {
    return addStyle(str, `color: ${color.cyan};`)
  },
  red: (str: string) => {
    return addStyle(str, `color: ${color.red};`)
  },
  green: (str: string) => {
    return addStyle(str, `color: ${color.green};`)
  },
  blue: (str: string) => {
    return addStyle(str, `color: ${color.blue};`)
  },
  bgWhite: (str: string) => {
    return addStyle(str, `background: ${color.white};`)
  },
  bgBlack: (str: string) => {
    return addStyle(str, `background: ${color.black};`)
  },
  bgCyan: (str: string) => {
    return addStyle(str, `background: ${color.cyan};`)
  },
  bgRed: (str: string) => {
    return addStyle(str, `background: ${color.red};`)
  },
  bgGreen: (str: string) => {
    return addStyle(str, `background: ${color.green};`)
  },
  bgBlue: (str: string) => {
    return addStyle(str, `background: ${color.blue};`)
  }
}

/**
 * 由
 * [
 *  'sure-utils__styles__color: #15559A;...',
 *  'tip__styles__color: #FFFFFF;...'
 * ]
 * 生成
 * [
 *  '%c sureutils %c tip',
 *  'color: #15559A;...',
 *  'color: #FFFFFF;...'
 * ]
 * @param msgs msg & style string Array
 * @returns
 */
const generateLogMsg = (...msgs: string[]) => {
  let msgRes = ''
  const stylesRes: string[] = []
  for (const item of msgs) {
    const [msg, style] = item.split(SPLIT_TAG)
    msgRes += `%c ${msg} `
    stylesRes.push(style)
  }
  return [msgRes, ...stylesRes]
}

/**
 * sure-utils tip [msg content]
 * @param args
 */
export const tipLog = (...args: string[]) => {
  const msgs = generateLogMsg(
    sureUtilsPrefix,
    tipPrefix,
    ...args
  )
  _console.log(...msgs)
}

/**
 * sure-utils warn [msg content]
 * @param args
 */
export const warnLog = (...args: string[]) => {
  const msgs = generateLogMsg(
    sureUtilsPrefix,
    warnPrefix,
    ...args
  )
  _console.warn(...msgs)
}

/**
 * sure-utils error [msg content]
 * @param args
 */
export const errorLog = (...args: string[]) => {
  const msgs = generateLogMsg(
    sureUtilsPrefix,
    errorPrefix,
    ...args
  )
  _console.error(...msgs)
}
