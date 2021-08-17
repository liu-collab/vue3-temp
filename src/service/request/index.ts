import axios from "axios";
import type { AxiosInstance } from 'axios'
import { YQRequestInterceptors, YQRequestConfig } from './type'
import { ElLoading } from 'element-plus';
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

class YQRequest {
  instance: AxiosInstance
  interceptors?: YQRequestInterceptors
  showLoading: boolean
  isLoading?: ILoadingInstance
  constructor(config: YQRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    //加载组件是否显示 , 默认显示
    this.showLoading = config.showLoading ?? true
    //实例上的拦截器用封装的接口进行数据类型定义
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requesrInterceptorsCath
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptotrsCath
    )

    //所有实例进行响应拦截
    this.instance.interceptors.request.use((config) => {

      //  console.log("所有实例拦截:请求拦截成功")
      if (this.showLoading) {
        this.isLoading = ElLoading.service({
          lock: true,
          text: "isLoading...",
          background: "rgba(0,0,0,.25)"
        })
      }
      return config
    }, error => {
      return error
    })
    this.instance.interceptors.response.use(res => {
      //  console.log("所有实例拦截:响应拦截成功")

      this.isLoading?.close()


      const data = res.data
      if (data.returnCode === "-1001") {
        console.log("请求失败,错误信息")
      } else {
        return data
      }

    }, error => {

      this.isLoading?.close()

      if (error.response.status === 404) {
        console.log("404:Not Found")
      }
      return error
    })
  }
  request<T>(config: YQRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)

      }
      //展示loading组件 ，不需要的时候关闭
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          // console.log(res)
          resolve(res)
          //请求loading组件关闭之后打开
          this.showLoading = true
        })
        .catch(error => {
          //请求loading组件关闭之后打开
          this.showLoading = true
          reject(error)
          console.log(error)
        })
    })
  }
  get<T>(config: YQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }
  post<T>(config: YQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }
  delete<T>(config: YQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }
  patch<T>(config: YQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}


export default YQRequest
