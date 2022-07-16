import { isNull } from '../src'

describe('isNull', () => {
  expect(isNull(null)).toBe(true)
  expect(isNull(undefined)).toBe(false)
})
