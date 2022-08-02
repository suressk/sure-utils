export const color = {
  white: '#FFFFFF',
  black: '#000000',
  cyan: '#51C4D3',
  red: '#C02C38',
  green: '#42C02E',
  yellow: '#F1CA17',
  blue: '#15559A'
}

export const SPLIT_TAG = '__styles__'

const leftPaddingStyle = 'padding: 2px 1px; border-radius: 3px 0 0 3px;'
const rightPaddingStyle = 'padding: 2px 1px; border-radius: 0 3px 3px 0;'

export const sureUtilsPrefix = `sure-utils${SPLIT_TAG}${leftPaddingStyle}background: ${color.blue}; font-weight: bold; color: ${color.white};`
export const tipPrefix = `tip${SPLIT_TAG}${rightPaddingStyle} background: ${color.green}; font-weight: bold; color: ${color.white};`
export const warnPrefix = `warn${SPLIT_TAG}${rightPaddingStyle} background: ${color.yellow}; font-weight: bold; color: ${color.white};`
export const errorPrefix = `error${SPLIT_TAG}${rightPaddingStyle} background: ${color.red}; font-weight: bold; color: ${color.white};`
