import YQRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
const Request = new YQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //单个实例进行拦截
  interceptors: {
    requestInterceptors: (config) => {
      //携带token拦截
      const token = '';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // console.log(config.headers.Authorization)
      //   console.log("请求拦截成功")
      return config;
    },
    requesrInterceptorsCath: (error) => {
      return error;
    },
    responseInterceptors: (res) => {
      // console.log("响应拦截成功")
      return res;
    },
    responseInterceptotrsCath: (error) => {
      return error;
    }
  }
});

export default Request;
