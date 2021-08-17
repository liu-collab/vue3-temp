import type { AxiosRequestConfig, AxiosResponse } from 'axios'

//定义拦截器的接口类型
export interface YQRequestInterceptors<T = AxiosResponse> {
  //request拦截器类型
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  //request错误拦截器类型
  requesrInterceptorsCath?: (error: any) => any
  //response拦截器类型
  responseInterceptors?: (res: T) => T
  //response错误拦截类型
  responseInterceptotrsCath?: (error: any) => any
}

export interface YQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YQRequestInterceptors<T>
  showLoading?: boolean
}
