import {
  RegEx_Domain,
  RegEx_Email,
  RegEx_PhoneNumber
} from './constants'

export * from './constants'

/**
 * Check val is domain name
 * @param val the check val
 * @returns boolean
 */
export const isDomainName = (val: string): boolean => RegEx_Domain.test(val)
/**
 * Check val is email
 * @param val the check val
 * @returns boolean
 */
export const isEmail = (val: string): boolean => RegEx_Email.test(val)

/**
 * Check val is phone number
 * @param val the check val
 * @returns boolean
 */
export const isPhoneNumber = (val: string): boolean => RegEx_PhoneNumber.test(val)
