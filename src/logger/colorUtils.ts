import { SPLIT_TAG, color } from './constants'

const addStyle = (str: string, styles: string) => {
  const strArr = str.split(SPLIT_TAG)
  strArr[1] = strArr[1] ? `${strArr[1]}${styles};` : styles
  return strArr.join(SPLIT_TAG)
}

const colorUtils = {
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

export default colorUtils
