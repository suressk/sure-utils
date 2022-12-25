/**
 * Load js asynchronously
 * @param url The js url that needs to be loaded - `script src`
 * @param onSuccess The callback function for js loading completion
 * @param onFail The callback function for js loading failure
 */
const dynamicLoadJs = (url: string, onSuccess?: Function, onFail?: OnErrorEventHandler) => {
  const headEl = document.head || document.getElementsByTagName('head')[0]
  const scriptEl = document.createElement('script')

  scriptEl.setAttribute('type', 'text/javascript')
  scriptEl.setAttribute('src', url)

  if (typeof onSuccess === 'function') {
    scriptEl.onload = () => {
      onSuccess()
      scriptEl.onload = null
    }
    /**
     * 兼容 IE（弃）
     */
    // if (scriptEl.readyState) {
    //   scriptEl.onreadystatechange = () => {
    //     if (
    //       !scriptEl.readyState
    //       || scriptEl.readyState === 'loaded'
    //       || scriptEl.readyState === 'complete'
    //     ) {
    //       onSuccess()
    //       scriptEl.onload = scriptEl.onreadystatechange = null
    //     }
    //   }
    // }
  }

  if (typeof onFail === 'function') {
    scriptEl.onerror = (ev) => {
      onFail(ev)
    }
  }

  headEl.appendChild(scriptEl)
}

/**
 * Load js asynchronously with Promise
 * @param url The js url that needs to be loaded - `script src`
 */
const dynamicLoadJsPromise = (url: string) => {
  return new Promise((resolve, reject) => {
    dynamicLoadJs(url, resolve, reject)
  })
}

export {
  dynamicLoadJs,
  dynamicLoadJsPromise
}
