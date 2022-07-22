/** Used to check objects for own properties. */
export const hasOwnProperty = Object.prototype.hasOwnProperty

export const getPrototypeOf = Object.getPrototypeOf

/* Used to transfer value for string */
export const objectToString = Object.prototype.toString

/* get the RowType as [object RowType] */
export const toTypeString = (val: unknown): string => objectToString.call(val)

/* isArray */
export const isArray = Array.isArray

