import { isNull } from '..'

describe('isNull', () => {
  expect(isNull(null)).toBe(true)
  expect(isNull(undefined)).toBe(false)
})
