/**
 * Strip HTML elements from a string
 * 去除字符串中的 HTML 元素
 *
 * @param htmlStr
 * @returns
 */
const stripHtmlEl = (htmlStr: string) => (new DOMParser().parseFromString(htmlStr, 'text/html')).body.textContent || ''

export default stripHtmlEl
