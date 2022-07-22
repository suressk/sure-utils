export interface Options {
  /**
   * Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
   * while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
   * one final time after the last throttled-function call. (After the throttled-function has not been called for
   * `delay` milliseconds, the internal counter is reset).
   */
  noTrailing?: boolean
  /**
   * Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
   * immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
   * callback will never executed if both noLeading = true and noTrailing = true.
   */
  noLeading?: number
  /**
   * If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
   * false (at end), schedule `callback` to execute after `delay` ms.
   */
  debounceMode?: any
}

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {Function} callback - invoke func
 * @param {number} delay - delay to be invoked time(ms)
 * @param {Options} [options] - An object to configure options.
 * @returns {Function} A new throttled function.
 */
function throttle<Args extends any[], F extends (...args: Args) => any>(
  callback: F,
  delay: number,
  options: Options = {}
): Function {
  const {
    noTrailing = false,
    noLeading = false,
    debounceMode = undefined
  } = options
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  let timerId: NodeJS.Timeout | number | null = null
  let cancelled = false

  // Keep track of the last time `callback` was executed.
  let lastExec = 0

  // Function to clear existing timeout
  function clearExistingTimeout() {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }
  }

  // Function to cancel next exec
  function cancel(options: { upcomingOnly?: boolean } = {}) {
    const { upcomingOnly = false } = options
    clearExistingTimeout()
    cancelled = !upcomingOnly
  }

  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */
  function wrapper(this: any, ...args: Args) {
    const self = this
    const elapsed = Date.now() - lastExec

    if (cancelled) {
      return
    }

    // Execute `callback` and update the `lastExec` timestamp.
    function exec() {
      lastExec = Date.now()
      callback.apply(self, args)
    }

    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */
    function clear() {
      timerId = null
    }

    if (!noLeading && debounceMode && !timerId) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec()
    }

    clearExistingTimeout()

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now()
        if (!noTrailing) {
          timerId = setTimeout(debounceMode ? clear : exec, delay)
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec()
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timerId = setTimeout(
        debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay
      )
    }
  }

  wrapper.cancel = cancel

  // Return the wrapper function.
  return wrapper
}

export default throttle
