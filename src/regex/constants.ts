/**
 * email address
 */
export const RegEx_Email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

/**
 * domain name
 */
export const RegEx_Domain = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/

/**
 * (weak) password: 6~18 bits, contain: `letters` / `numbers` / `_`
 * and must start with letters
 */
export const RegEx_Password = /^[a-zA-Z]\w{5,17}$/

/**
 * strong password: 8~16 bits, contain: `letters` and `numbers`
 * Special characters cannot be used
 * 必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-16之间
 */
export const RegEx_StrongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/

/**
 * phone number
 */
export const RegEx_PhoneNumber = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
