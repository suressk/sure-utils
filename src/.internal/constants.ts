export const ARGS_TAG = '[object Arguments]'
export const ARRAY_TAG = '[object Array]'
export const BOOLEAN_TAG = '[object Boolean]'
export const DATE_TAG = '[object Date]'
export const ERROR_TAG = '[object Error]'
export const MAP_TAG = '[object Map]'
export const NUMBER_TAG = '[object Number]'
export const OBJECT_TAG = '[object Object]'
export const REGEX_TAG = '[object RegExp]'
export const SET_TAG = '[object Set]'
export const STRING_TAG = '[object String]'
export const SYMBOL_TAG = '[object Symbol]'
export const WEAKMAP_TAG = '[object WeakMap]'
export const ARRAYBUFFER_TAG = '[object ArrayBuffer]'
export const DATAVIEW_TAG = '[object DataView]'
export const FLOAT32_TAG = '[object Float32Array]'
export const FLOAT64_TAG = '[object Float64Array]'
export const INT8_TAG = '[object Int8Array]'
export const INT16_TAG = '[object Int16Array]'
export const INT32_TAG = '[object Int32Array]'
export const UINT8_TAG = '[object Uint8Array]'
export const UINT8CLAMPED_TAG = '[object Uint8ClampedArray]'
export const UINT16_TAG = '[object Uint16Array]'
export const UINT32_TAG = '[object Uint32Array]'

export const randomLetters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
]

/*
 * milliseconds of a day
 * 3600(s) * 24(h) * 1000(ms)
 */
export const oneDayMilliseconds = 86400000