interface DebounceOptions<Result> {
  isImmediate?: boolean
  maxWait?: number
  callback?: (data: Result) => void
}

interface DebouncedFunction<
  Args extends any[],
  F extends (...args: Args) => any
> {
  (this: ThisParameterType<F>, ...args: Args & Parameters<F>): Promise<
    ReturnType<F>
  >
  cancel: (reason?: any) => void
}

interface DebouncedPromise<FunctionReturn> {
  resolve: (result: FunctionReturn) => void
  reject: (reason?: any) => void
}

/**
 * debounce
 * @param func debounce to invoke func
 * @param waitMilliseconds wait to be invoked time(ms)
 * @param options
 * @returns
 */
export default function debounce<
  Args extends any[],
  F extends (...args: Args) => any
>(
  func: F,
  waitMilliseconds = 50,
  options: DebounceOptions<ReturnType<F>> = {}
): DebouncedFunction<Args, F> {
  let timerId: ReturnType<typeof setTimeout> | null
  const isImmediate = options.isImmediate ?? false
  const callback = options.callback ?? false
  const maxWait = options.maxWait
  let lastInvokeTime = Date.now()

  let promises: DebouncedPromise<ReturnType<F>>[] = []

  function nextInvokeTimeout() {
    if (maxWait !== undefined) {
      const timeSinceLastInvocation = Date.now() - lastInvokeTime

      if (timeSinceLastInvocation + waitMilliseconds >= maxWait) {
        return maxWait - timeSinceLastInvocation
      }
    }

    return waitMilliseconds
  }

  const debouncedFunction = function (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    const context = this
    return new Promise<ReturnType<F>>((resolve, reject) => {
      const invokeFunction = function () {
        timerId = null
        lastInvokeTime = Date.now()
        if (!isImmediate) {
          const result = func.apply(context, args)
          callback && callback(result)
          promises.forEach(({ resolve }) => resolve(result))
          promises = []
        }
      }

      const shouldCallNow = isImmediate && timerId === null

      if (timerId !== null) {
        clearTimeout(timerId)
      }

      timerId = setTimeout(invokeFunction, nextInvokeTimeout())

      if (shouldCallNow) {
        const result = func.apply(context, args)
        callback && callback(result)
        return resolve(result)
      }
      promises.push({ resolve, reject })
    })
  }

  debouncedFunction.cancel = function (reason?: any) {
    if (timerId !== null) {
      clearTimeout(timerId)
    }
    promises.forEach(({ reject }) => reject(reason))
    promises = []
  }

  return debouncedFunction
}

