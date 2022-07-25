interface ReturnCitySnWindow extends Window {
  returnCitySN: {
    cip: string
    cid: string
    cname: string
  }
}

const sohuIpAddressUrl = 'http://pv.sohu.com/cityjson?ie=utf-8'

/**
 * Get user ip address and citys info with third part service
 * @returns
 */
export const getUserIp = () => {
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script')
    /*
      搜狐的第三方接口获取用户的 ip 及城市信息，成功后会直接在全局
      对象（window）上添加一个返回的数据属性 returnCitySN
    */
    scriptElement.src = sohuIpAddressUrl
    document.body.appendChild(scriptElement)
    scriptElement.onload = () => {
      try {
        document.body.removeChild(scriptElement)
        resolve((window as unknown as ReturnCitySnWindow).returnCitySN)
      } catch (e) {
        reject(e)
      }
    }
  })
}
