import { getNowTimeStr } from '../date'

/**
 * Native browser info
 */
interface BrowserInfo {
  domain?: string
  url?: string
  title?: string
  referrer?: string
  screenHeight?: number | string
  screenWidth?: number | string
  color?: number
  lang?: string
  ua?: string
  watchTime?: string
  memory?: string
  connectTime?: string
  responseTime?: string
  renderTime?: string
}

/* add memory property type, chrome browser existed */
interface WindowPerformance extends Performance {
  memory: {
    jsHeapSizeLimit: number
    totalJSHeapSize: number
    usedJSHeapSize: number
  }
}

/**
 * Format memory data size as `xxMB`
 * @param val
 * @returns
 */
export const formatMemoryToMB = (val: number) => `${(val / 1024 / 1024).toFixed(2)}MB`

/**
 * Format time to be seconds from milliseconds
 * @param val
 * @returns
 */
export const formatMsToSecordsStr = (val: number) => `${~~(val / 1000)}s`

/**
 * Get browser native information
 * @returns
 */
export const getBrowserInfo = (): Promise<BrowserInfo> => {
  // 获取浏览器原生数据
  return new Promise((resolve) => {
    const browserInfos: BrowserInfo = {}
    if (document) {
      const { domain, URL, title, referrer } = document
      /* 域名 */
      browserInfos.domain = domain || ''
      /* 当前 Url 地址 */
      browserInfos.url = URL || ''
      /* 当前页标题 */
      browserInfos.title = title || ''
      /* 上一跳路径 */
      browserInfos.referrer = referrer || ''
    }
    // Window 对象数据
    if (window?.screen) {
      const { height, width, colorDepth } = window.screen
      /* 屏显信息 */
      browserInfos.screenHeight = height || 0
      browserInfos.screenWidth = width || 0
      browserInfos.color = colorDepth || 0
    }
    // navigator 对象数据
    if (navigator) {
      const { language, userAgent } = navigator
      browserInfos.lang = language || '' // 获取所用语言种类
      browserInfos.ua = userAgent.toLowerCase() // 运行环境
    }
    // 获取性能相关参数
    if (window?.performance) {
      browserInfos.memory = formatMemoryToMB((window.performance as WindowPerformance)?.memory?.usedJSHeapSize)
      const timing = window.performance?.timing || {}
      browserInfos.connectTime = formatMsToSecordsStr(timing.connectEnd - timing.connectStart)
      browserInfos.responseTime = formatMsToSecordsStr(timing.responseEnd - timing.responseStart)
      browserInfos.renderTime = formatMsToSecordsStr(timing.domComplete - timing.domLoading)
    }
    browserInfos.watchTime = getNowTimeStr()
    resolve(browserInfos)
  })
}

// export default getNativeBrowserInfo
