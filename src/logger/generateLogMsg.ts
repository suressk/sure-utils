import { SPLIT_TAG } from './constants'
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

export default generateLogMsg
