/**
 * @typedef {Object} ParseUserAgentReturn
 * @property {Boolean} isAndroid is Android Platform
 * @property {Boolean} isIOS is iOS Platform
 * @property {Boolean} isWX is WeiXin
 * @property {Boolean} isWeibo is Weibo
 * @property {String} platform platform name `"android"` / `"ios"`
 * @property {String} androidVersion version of Android
 * @property {String} iosVersion version of iOS
 */

interface IUa {
  isAndroid: boolean
  isIOS: boolean
  isWX: boolean
  isWeibo: boolean
  platform?: string
  androidVersion?: string
  iosVersion?: string
}

/**
 * Parse UserAgent str to get platform name and which app inner env
 * @param {String} [UA = window.navigator.userAgent] UserAgent
 * @return {ParseUserAgentReturn} ua infomation
 */
const parseUserAgent = (UA: string = window.navigator.userAgent) => {
  const inBrowser = window !== undefined
  if (inBrowser) {
    UA = UA.toLocaleLowerCase()
  }

  const isAndroid = !!UA && /android/.test(UA)
  const isIOS = !!UA && /iphone|ipad|ipod|ios/.test(UA)
  const isWX = !!UA && /micromessenger/.test(UA)
  const isWeibo = !!UA && /weibo/.test(UA)

  const ua: IUa = {
    isAndroid,
    isIOS,
    isWX,
    isWeibo
  }

  let platform = 'other'

  if (isAndroid) {
    platform = 'android'
    try {
      let p0 = UA.indexOf('(')
      const p1 = UA.indexOf(')')
      let androidVersion = UA.substring(p0 + 1, p1)
      androidVersion = androidVersion.split(';')[1]
      p0 = androidVersion.indexOf('android ')
      androidVersion = androidVersion.substring(p0 + 8)

      ua.androidVersion = androidVersion
    } catch (error) { }
  }

  if (isIOS) {
    platform = 'ios'
    try {
      const p0 = UA.indexOf('cpu iphone os ')
      const p1 = UA.indexOf(' like mac os')
      let iosVersion = UA.substring(p0 + 14, p1)
      iosVersion = iosVersion.replace(/_/gim, '.')
      ua.iosVersion = iosVersion
    } catch (error) { }
  }

  ua.platform = platform

  return ua
}

const ua = parseUserAgent()

export default ua
