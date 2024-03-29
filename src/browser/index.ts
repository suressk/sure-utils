// [track] 获取浏览器信息
export * from './getBrowserInfo'

export * from './getUserIp'

export * from './dynamicLoadJs'

export { default as ua } from './ua'

/**
 * Copy text to clipboard
 * 将文本复制到剪贴板
 * @param text
 * @returns
 */
export const copyToClipboard = (text: string) => navigator.clipboard.writeText(text)

/**
 * Get user selected text
 * @returns
 */
export const getSelectedText = () => window.getSelection()?.toString()

/**
 * 检测当前环境是否是黑暗模式
 */
export const isDarkMode = window?.matchMedia('(prefers-color-scheme: dark)').matches
