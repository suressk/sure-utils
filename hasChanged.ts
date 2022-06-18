/**
 * Check ths value is changed or not
 * 
 * @param value the new value
 * @param oldValue the old value
 * @returns boolean
 */
const hasChanged = (
	value: any,
	oldValue: any
): boolean => !Object.is(value, oldValue)

export default hasChanged